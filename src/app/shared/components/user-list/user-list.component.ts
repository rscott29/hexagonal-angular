import {Component, Inject, OnInit} from '@angular/core';
import {USER_SERVICE, UserServiceInterface} from "../../../core/services/user.service.interface";
import {Observable} from "rxjs";
import {User} from "../../../core/models/user.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public vm$!: Observable<{ loading: boolean; error: string; users: User[] }>;

  constructor(@Inject(USER_SERVICE) private userService: UserServiceInterface ) {
  }

  ngOnInit() {
    this.vm$ = this.userService.vm$;
      this.userService.loadUsers();
  }
}
