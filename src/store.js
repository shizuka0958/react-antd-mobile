import { createStore } from 'redux'

const defaultState = {
    user:'Mark',
    shop:'西贝西北菜餐厅'
}
const reducer = (state = defaultState, action) => {
    return state;
};

let store = createStore(reducer, defaultState);

export default store;