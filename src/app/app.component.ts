import { Choice } from './models/choice';
import { ChoiceService } from './services/choice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  choices: Choice[] = [];

  constructor(private choiceService: ChoiceService) {}

  ngOnInit(): void {
    this.choiceService.getChoice().subscribe((choice) => {
      this.choices.push(choice);
      console.log(this.choices);
    });
  }

  public onClickSendChoice(choiceId: number): void {
    this.choiceService.sendChoice({
      songId: `song${choiceId}`,
    });
  }

  public onClickPlay(): void {
    this.choiceService.play();
  }

  public onClickPause(): void {
    this.choiceService.pause();
  }

  public onClickSetupVote(): void {
    this.choiceService.setupVote();
  }
}
