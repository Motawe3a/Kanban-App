import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/models/column.modal';
import { Board } from './../../models/board.modal';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      'task 2'
    ]),
    new Column('Reasearch', [
      'task 1',
      'task 3'
    ]),
    new Column('Todo', [
      'Go home',
      'Fall asleep'
    ]),
    new Column('Done', [
      'Get to work',
      'Pick up groceries'
    ]),
  ])

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
