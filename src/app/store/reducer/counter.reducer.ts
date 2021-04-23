import { Action } from "@ngrx/store";
import * as CounterActions from '../actions/counter.action'
const initialState = {
    counter: 0
}

export function counterReducer(state = initialState, action: CounterActions.CounterAction) {
    switch (action.type) {
        case "INCREM":
            return {
                counter: state.counter + 1
            }

        case "DECREM":
            return {
                counter: state.counter - 1
            }

        case "ADD_10":
            return {
                counter: state.counter + action.value
            }
        case "SUB_5":
            return {
                counter: state.counter - action.value
            }
        default:

            return state

    }


}