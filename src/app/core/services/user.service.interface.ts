import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import {InjectionToken} from "@angular/core";
export const USER_SERVICE = new InjectionToken<UserServiceInterface>('UserServiceInterface');
export interface UserServiceInterface {
  getUsers(): Observable<User[]>;
  loadUsers():void;
  vm$: Observable<{ users: User[]; loading: boolean; error: any }>;
}
