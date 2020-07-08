const { combineReducers } = require("redux");
const { default: cakeReducer } = require("./cake/cakeReducer");
const { default: iceCreamReducer } = require("./iceCream/iceCreamReducer");

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer