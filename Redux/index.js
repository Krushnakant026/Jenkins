const redux = require('redux');
const createstore = redux.createStore;

//action
const BUY_SAMOSA = "BUY_SAMOSA";
const BUY_KACHORI = "BUY_KACHORI";

function buysamosa(){
    return{
        type:BUY_SAMOSA
    }    
}

function buykachori(){
    return{
        type:BUY_KACHORI
    }    
}


//Reducer
const initialState = {
    numberOfSamosa:30,
    numberOfKachori:30
}

const myreducer = (state = initialState,action)=>{
    switch(action.type){
        case BUY_SAMOSA:return{
            ...state,
            numberOfSamosa:state.numberOfSamosa-2
        }

        case BUY_SAMOSA:return{
            ...state,
            numberOfKachori:state.numberOfKachori-1
        }


        default: return state
    }
}

const store = redux.createStore(myreducer);
console.log(`initialState`,store.getState());
store.subscribe(()=>console.log("State After Update",store.getState()));
store.dispatch(buysamosa());
store.dispatch(buykachori());