export const INCREM = "INCREM"
export const DECREM = "DECREM"
export const ADD_10 = "ADD_10"
export const SUB_5 = "SUB_5"


//custom Actions
export class AddCounter {
    public type = ADD_10
    constructor(public value: number) { }

}
export class SubCounter {
    public type = SUB_5
    constructor(public value: number) { }

}
export type CounterAction = AddCounter | SubCounter