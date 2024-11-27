import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {EditProfilComponent} from '../../components/edit-profil/edit-profil.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ProfilComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width="550px";
    this.dialog.open(EditProfilComponent,dialogConfig);
  }
}
