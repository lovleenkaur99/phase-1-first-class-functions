function receivesAFunction(spy) {
    spy()
}

function returnsANamedFunction() { 
    const namedFunction = () => {}
    return namedFunction
}

function returnsAnAnonymousFunction(fnName) { 
    return () => {}
}