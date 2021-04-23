import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter: number
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      console.log("[State]", state);
      this.counter = state['ctr'].counter

    })
  }
  onIncrement() {
    this.store.dispatch({ type: "INCREM" })
  }
  onDecrement() {
    this.store.dispatch({ type: "DECREM" })


  }

  onAdd(value) {
    this.store.dispatch({ type: 'ADD_10', value: value })

  }
  onSub(value) {
    this.store.dispatch({ type: 'SUB_5', value: value })
  }

}
