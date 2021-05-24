import {Component, Input} from '@angular/core';
import {Quotation} from "../Models/quotation";
import {QUOTES} from "../Models/databse";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent  {

  @Input()
  quotes: Quotation[] | undefined ;

  @Input()
  title: string | undefined;
}
