const initialState = 0;
const changeTheNum =(state=initialState,action)=>{
    switch(action.type){
        case "increment": return state + action.payload;
        case "decrement": return state - action.payload;
        default :return state;
         
    }
}

export default changeTheNum;