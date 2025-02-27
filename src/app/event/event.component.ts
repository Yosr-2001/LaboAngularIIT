import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Evt } from 'src/models/Evt';
import { EventService } from 'src/services/event.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ModalEvtComponent } from '../modal-evt/modal-evt.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private ES: EventService, private dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  // dataSource: Evt[] = [];
  dataSource!: MatTableDataSource<any>;

  displayedColumns: string[] = ['titre', 'dateDebut', 'dateFin', 'lieu', 'icons'];

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    this.ES.GetAllEvts().subscribe((a) => {
      // this.dataSource = a
      this.dataSource = new MatTableDataSource(a);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  delete(id: String): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: "300px"
    })

    dialogRef.afterClosed().subscribe(
      result => {
        console.log(`Dialog result: ${result}`);
        if (result) {
          this.ES.delete(id).subscribe(() => {
            this.fetchData();
          })

        }
      }
    )
  }
  //lancer l ouverture de la boite de MoodalEventCOmpo
  open() {
    let dialogRef = this.dialog.open(ModalEvtComponent)
    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          console.log("Dialog output:", data);

          this.ES.addEvent(data).subscribe(() => {
            this.fetchData();
          });
        }

      }
    );



  }
}
