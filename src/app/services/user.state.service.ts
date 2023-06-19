import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../domain/user.model";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  private _users = new BehaviorSubject<User[]>([]);
  readonly users$: Observable<User[]> = this._users.asObservable();

  constructor(private userService: UserService) {}

  fetchUsers() {
    this.userService.getAllUsers().subscribe(users => this._users.next(users));
  }
}
