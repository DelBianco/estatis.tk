// Now, import
var Estatistk = require('./Estatistk');
var express = require("express");
var app = express();
var router = express.Router();

var path = __dirname + '/views/';

const PORT = 8088;
const HOST = '0.0.0.0';

router.use(function (req, res, next) {
    console.log("/" + req.method);
    next();
});

router.get("/", function (req, res) {
    res.sendFile(path + "index.html");
});


var est = new Estatistk();

router.get("/api", function (req, res) {
    res.json({endpoint: est.endpoints()});
});

est.endpoints().forEach(function (endpoint) {
    console.log(endpoint);
    router.get("/api/"+endpoint, function (req, res) {
        res.json({data: est.data(endpoint)});
    });
});

app.use(express.static(path));
app.use("/", router);

app.listen(8088, function () {
    console.log('Estatis.tk running on port 8088!')
})
