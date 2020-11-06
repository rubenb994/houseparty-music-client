import { WebSocketService } from './services/web-socket.service';
import { Component, OnInit } from '@angular/core';
import { Toaster } from 'ngx-toast-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  choices = null;

  constructor(
    private webSocketService: WebSocketService,
    private toaster: Toaster
  ) {}

  ngOnInit(): void {
    this.webSocketService.getNewVote().subscribe((choices) => {
      console.log('Vote started message from server', choices);
      this.choices = choices;
      window.scrollTo(0, 0);
    });

    this.webSocketService.getEndVote().subscribe(() => {
      console.log('Vote ended message from server');
      this.choices = null;
    });
  }

  public onClickChoice(choice): void {
    this.toaster.open(`You have voted for ${choice.track.name}`, {
      position: 'bottom-center',
      type: 'success',
      preventDuplicates: true
    });
    this.webSocketService.sendVote(choice.track.id);
  }
}
