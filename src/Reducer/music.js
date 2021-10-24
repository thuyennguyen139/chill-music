const initialState = false;

const openReducer = (state = initialState, action ) =>{
    switch(action.type){
        case 'Open':{
            state = true;
            console.log("vo day nèy")
            return state;
        }
        case 'Close':{
            state = false;
            return state;
        }
        default: {
            return state;
        }
    }
    
}
export default openReducer;
