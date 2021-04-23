import { Component, OnDestroy, OnInit } from '@angular/core';
import { concat, merge, Observable, of, Subscription } from 'rxjs';
import { map, filter, take } from "rxjs/operators";
// import { Observable, Subscription } from 'rxjs';
// import { from, interval, Observable, Subscription } from "rxjs";
// import { interval, Observable, Subscription } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObservable
  private SecondObservable
  private combine
  private mergeCombine
  title = 'Home'

  constructor() {

  }

  ngOnInit() {
    const customObservable = Observable.create(observer => {
      let count = 0
      setInterval(() => {
        observer.next(count)
        if (count == 4) {
          observer.complete()
        }

        if (count >= 5) {
          observer.error(new Error("Must be less than 4"))
        }

        count++
      }, 2000)

    })
    this.firstObservable = customObservable.pipe(filter(data => {
      return data > 0
    }), map((data: number) => {
      return 'Comedy Video :' + (data)
    }), take(2))


    this.SecondObservable = customObservable.pipe(map((data: number) => {
      return 'Sports Video :' + (data + 1)
    }), take(5))
    // this.combine = concat(this.firstObservable, this.SecondObservable)
    // this.combine.subscribe(data => {
    //   console.log(data);
    // }, err => {
    //   console.log(err);

    // }, () => {
    //   console.log('Completed');

    // })
    this.mergeCombine = merge(this.firstObservable, this.SecondObservable)
    this.mergeCombine.subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);

    }, () => {
      console.log('Completed');

    })





  }
  ngOnDestroy(): void {
    this.combine.unsubscribe()
  }



}
