import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-choix-filire',
  templateUrl: './choix-filire.component.html',
  styleUrl: './choix-filire.component.css'
})
export class ChoixFilireComponent {
  todo = ['Filire 1', 'Filire 2', 'Filire 3', 'Filire 4'];
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
