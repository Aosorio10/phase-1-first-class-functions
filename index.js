// my code 
function receivesAFunction(cb){
   console.log(cb());
}

const returnsANamedFunction = function (){
    return function ex(){}
}

const returnsAnAnonymousFunction = function(){
    return function(){}
}
