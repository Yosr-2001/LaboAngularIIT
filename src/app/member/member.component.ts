import { Component } from '@angular/core';
import { MemberService } from '../../services/member.service';
import { Member } from 'src/models/Member';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  constructor(private MS: MemberService, private dialog: MatDialog) { }

  ngOnInit(): void { //se charge avant le constucteur plus rapide que dans le constructeur
    this.MS.GetAllMembers().subscribe((a) => {
      this.dataSource = a
    }) //il se declare subsc // a recoit le retour 

  }


  //saisie di tab
  dataSource: Member[] = [];
  //inj de dep => le mecanisme qui permet au composant d'injecter un service
  // (que seulement quand le serv accepte d etre injecter => presence de le decorateur ijectable)

  displayedColumns: string[] = ['cin', 'id', 'name', 'createdDate', 'type', 'icons'];

  delete(id: String): void {
    //lancer la boite 
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });
    //attendre resultat du user
    //si il accepte
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.MS.delete(id).subscribe(() => {
          this.MS.GetAllMembers().subscribe((a) => {
            this.dataSource = a
          }) //il se declare subsc // a recoit le retour 
        });
      }// ()-> retour du service et {}-> l action

    });


  }
}
