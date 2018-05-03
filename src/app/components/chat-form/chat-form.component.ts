import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../service/chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  public message: string;

  constructor(private chat: ChatService) { }

  ngOnInit() {
  }

  public send() {
    this.chat.sendMessage(this.message);
    this.message = '';
  }

  public handleSubmit(event) {
    if (event.keyCode === 13) {
      this.send();
    }
  }

}
