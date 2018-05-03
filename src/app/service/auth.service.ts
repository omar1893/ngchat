import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../models/chat-message';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  private authState: any;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {
    this.user = afAuth.authState;
  }

  get currentUserID(): string {
    return this.authState !== null ? this.authState.uid : '';
  }

  public authUser() {
    return this.user;
  }

  public login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
        (resolve) => {
          const status = 'online';
          this.setUserStatus(status);
          this.router.navigate(['chat']);
        }
      );
  }

  public signUp(email: string, password: string, displayName: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        const status = 'online';
        this.setUserData(email, displayName, status);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public setUserData(email: string, displayName: string, status: string): void {
    const path = `users/${this.currentUserID}`;
    const data = {
      email: email,
      displayName: displayName,
      status: status
    };

    this.db.object(path).update(data)
      .catch(error => console.log(error));

  }

  public setUserStatus(status: string): void {
    const path = `users/${this.currentUserID}`;
    const data = {
      status: status
    };
  }

  public logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }

}
