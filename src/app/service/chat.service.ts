import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../models/chat-message';
import { AuthService } from '../service/auth.service';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatService {
  public chatMessages: FirebaseListObservable<ChatMessage[]>;
  public chatMessage: ChatMessage;
  public userName: Observable<string>;
  public user: any;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }
    });
   }

  public sendMessage(msg: string) {
    const timestamp  = this.getTimeStamp();
    const email = this.user.email;
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg,
      timeSent: timestamp,
      userName: this.userName,
      email: email
    });
  }

  public getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' + (now.getUTCMonth() + 1) + '/' + now.getUTCDate();
    const time = now.getUTCHours() + ':' + now.getUTCMinutes() + ':' + now.getUTCSeconds();

    return (date + ' ' + time);
  }

  public getMessages(): FirebaseListObservable<ChatMessage[]> {
    return this.db.list('messages', {
      query: {
        limitToLast: 25,
        orderByKey: true,
        endAt: false
      }
    });
  }
}
