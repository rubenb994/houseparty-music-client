import { WebSocketServiceService } from './services/web-socket-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'houseparty-music-client';

  constructor(private webSocketService: WebSocketServiceService) {}

  ngOnInit(): void {
    console.log(this.webSocketService);

    this.webSocketService.listen('test event').subscribe((data) => {
      console.log(data);
    });
  }
}
