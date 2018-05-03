import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>;
  userEmail: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = this.authService.authUser();
    this.user.subscribe(
      user => {
        if (user) {
          this.userEmail = user.email;
        }
      }
    );
  }

  public logout() {
    this.authService.logout();
  }

  public login() {
    this.router.navigate(['login']);
  }

}
