import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  activatedEmitter = new Subject<boolean>()
  userName = new Subject<any>()
  usernName2 = new BehaviorSubject<any>("ROnaldo")
  constructor() { }
}
