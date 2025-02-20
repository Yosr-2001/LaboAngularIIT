import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  //forcage de  type le composnat apparait en tq boite
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) { }
}
