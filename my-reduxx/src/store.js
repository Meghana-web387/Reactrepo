import { createStore } from "redux";

//initial state
const initialState = {
    user: {
        username: "Meghana",
        balanace: 50000,
    },
};

//Action
const addMoney = (amt) = > ({
    type: "addMoney",
    payload: amt,
});

const removeMoney = (amt) = > ({
    type: "removeMoney",
    payload: amt,
});

//Reducer
function reducer(state = initialState, action) {
    
}
const store = createStore(reducer);
export default store;