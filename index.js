function receivesAFunction(spy) {
    spy()
}

function returnsANamedFunction() { 
    return function named() { 
        console.log(" ")
    }
}

function returnsAnAnonymousFunction() { 
    return function () { 
        console.log(" ")
    }
}