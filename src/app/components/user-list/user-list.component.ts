import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../service/chat.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: User[];

  constructor(chat: ChatService) {
    chat.getUsers().subscribe(users => {
      this.users = users;
    });
   }

  ngOnInit() {
  }

}
