import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { ListTaskComponent } from './board/list-task/list-task.component';
import { SaveTaskComponent } from './board/save-task/save-task.component';
import { ListRolComponent } from './admin/list-rol/list-rol.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { RegisterRolComponent } from './admin/register-rol/register-rol.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { UpdateRolComponent } from './admin/update-rol/update-rol.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { RegisterComponent } from './home/register/register.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },

  {
    path: 'listTask',
    component: ListTaskComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'saveTask',
    component: SaveTaskComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'listRole',
    component: ListRolComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'listUser',
    component: ListUserComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'registerRole',
    component: RegisterRolComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'registerUser',
    component: RegisterUserComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'updateRole',
    component: UpdateRolComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'updateUser',
    component: UpdateUserComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
