const redux = require("redux")

let reducer=(state={num:0},action)=>{
    let newState = {...state}
    switch (action.type){
        case "ADD":
                newState.num += action.cont;
                return newState
        case "DEI":
                newState.num -= action.cont; 
                return newState
        default:
                return newState;
    }
}

let store = redux.createStore(reducer);


 

store.dispatch({
    type:"ADD",
    cont:10
})
console.log(store.getState())
store.dispatch({
    type:"ADD",
    cont:5
})
console.log(store.getState())

store.dispatch({
    type:"DEI",
    cont:3
})
console.log(store)