import { Choice } from './models/choice';
import { ChoiceService } from './services/choice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  choices: Choice[];

  constructor(private choiceService: ChoiceService) {}

  ngOnInit(): void {
    this.choiceService.getChoices().subscribe((choices) => {
      this.choices = choices;
    });
  }

  public onClickSendChoice(choiceId: number): void {
    this.choiceService.sendChoice({
      songId: `song${choiceId}`,
    });
  }
}
