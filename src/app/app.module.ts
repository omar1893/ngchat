import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { appRoutes } from './routes';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { FeedComponent } from './components/feed/feed.component';
import { MessageComponent } from './components/message/message.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { ChatService } from './service/chat.service';
import { AuthService } from './service/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    ChatFormComponent,
    ChatroomComponent,
    FeedComponent,
    MessageComponent,
    LoginFormComponent,
    SignupFormComponent,
    NavbarComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ChatService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
