import {Observable} from "rxjs";
import {User} from "../domain/user.model";

export interface UserRepository {
  getAllUsers(): Observable<User[]>;
  getUserById(id: number): Observable<User>;
}
