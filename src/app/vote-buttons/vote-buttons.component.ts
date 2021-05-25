import { EventEmitter } from '@angular/core';
import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-vote-buttons',
  templateUrl: './vote-buttons.component.html',
  styleUrls: ['./vote-buttons.component.css']
})
export class VoteButtonsComponent {

  @Output() voteValue = new EventEmitter<number>();

}
