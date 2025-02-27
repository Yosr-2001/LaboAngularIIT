import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-evt',
  templateUrl: './modal-evt.component.html',
  styleUrls: ['./modal-evt.component.css']
})
export class ModalEvtComponent implements OnInit {

  form!: FormGroup;
  //forcage de type 
  constructor(public dialogRef: MatDialogRef<ModalEvtComponent>) { //forcage de type pour que le composant soit affiché en tant que boite 
  }


  //initialisation de form 
  ngOnInit(): void {
    this.form = new FormGroup({
      titre: new FormControl(null),
      dateDebut: new FormControl(null),
      dateFin: new FormControl(null),
      lieu: new FormControl(null)
    })
  }

  // save et close
  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
