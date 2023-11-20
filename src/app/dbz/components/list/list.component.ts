import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDeleteIdEmitter: EventEmitter<string> = new EventEmitter();


  onDeleteId(index?: string):void {
    if ( !index ) return;

    this.onDeleteIdEmitter.emit(index);
  }

}
