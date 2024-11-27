import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrl: './edit-profil.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class EditProfilComponent {
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
