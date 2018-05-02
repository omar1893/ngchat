import { Routes } from '@angular/router';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';

export const appRoutes: Routes = [
    { path: 'signup', component: SignupFormComponent},
    { path: 'login', component: LoginFormComponent},
    { path: 'chat', component: ChatroomComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full'}
];
