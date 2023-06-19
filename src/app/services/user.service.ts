import {Inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../domain/user.model';
import { UserRepository } from '../ports/user.repository';
import {USER_REPOSITORY} from "../ports/user.repository.token";

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(@Inject(USER_REPOSITORY) private userRepository: UserRepository) {}

  getAllUsers(): Observable<User[]> {
    // You can add business logic here if needed
    return this.userRepository.getAllUsers();
  }

  getUserById(id: number): Observable<User> {
    // You can add business logic here if needed
    return this.userRepository.getUserById(id);
  }
}
