// Constructor
function Estatistk() {

}
// class methods
Estatistk.prototype.endpoints = ['set1','set2'];

Estatistk.prototype.data = function(endpoint){
    if(endpoint === 'set1'){
        return [1,2,3,4,5,6,7,8,9,0];
    }
    if(endpoint === 'set2'){
        return [0,9,8,7,6,5,4,3,2,1];
    }
};

// export the class
module.exports = Estatistk;