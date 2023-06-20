import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ApiUsersAdapter } from '../../core/adapters/api-users.adapter';
import { UserMapper } from '../../core/adapters/user.mapper';
import { UserService } from '../../core/services/user.service';
import {userReducer} from "./reducers/user.reducer";
import {UserEffects} from "./effects/user.effects";
import {UserListComponent} from "../../shared/components/user-list/user-list.component";
import {SharedModule} from "../../shared/shared.module";
import {USER_SERVICE} from "../../core/services/user.service.interface";


@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [
    ApiUsersAdapter,
    UserMapper,
    { provide: USER_SERVICE, useClass: UserService }
  ],
  exports: [
    UserListComponent
  ]
})
export class UserModule {}
