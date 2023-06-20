import { Injectable } from '@angular/core';
import {combineLatest, Observable} from 'rxjs';

import { User } from '../models/user.model';
import { ApiUsersAdapter } from '../adapters/api-users.adapter';
import { UserServiceInterface } from './user.service.interface';
import {Store} from "@ngrx/store";
import { loadUsers } from '../../features/user/actions/user.actions';
import {selectError, selectLoading, selectUsers} from "../../features/user/selectors/user.selectors";
import {map} from "rxjs/operators";
@Injectable()
export class UserService implements UserServiceInterface {
 private users$!: Observable<User[]>;
 private loading$!: Observable<boolean>;
 private error$!: Observable<any>;
 public vm$!: Observable<{ loading: boolean; error: string; users: User[] }>;

  constructor(private apiUsersAdapter: ApiUsersAdapter, private store: Store) {
    this.users$ = this.store.select(selectUsers);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
    this.vm$ = combineLatest([this.users$, this.loading$, this.error$]).pipe(
      map(([users, loading, error]) => ({ users, loading, error })));
  }

  getUsers(): Observable<User[]> {
    return this.apiUsersAdapter.getUsers();
  }

  loadUsers() {
    this.store.dispatch(loadUsers());
  }
}
