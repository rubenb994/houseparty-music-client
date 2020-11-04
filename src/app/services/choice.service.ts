import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Choice } from '../models/choice';
@Injectable({
  providedIn: 'root',
})
export class ChoiceService {
  constructor(private socket: Socket) {}

  public sendChoice(choice: Choice) {
    console.log('Sending choice', choice);
    this.socket.emit('new-choice', choice);
  }

  public getChoice(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on('new-choice', (choice) => {
        observer.next(choice);
      });
    });
  }
}
