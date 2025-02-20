import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],
})
export class MemberFormComponent implements OnInit {
  form!: FormGroup

  constructor(private MS: MemberService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //recuperer la route active
    const idCourant = this.activatedRoute.snapshot.params["id"] //snapsot-> capture d  image et params decompose 
    console.log(idCourant);
    //recuper id de la router act
    //tester
    if (idCourant) {
      console.log("je suis dans edit");
      this.MS.getMembeById(idCourant).subscribe((data) => {// data contient le member retourner
        this.form = new FormGroup({
          cin: new FormControl(data.cin, [Validators.required]),
          name: new FormControl(data.name, [Validators.required]),
          type: new FormControl(data.type, [Validators.required]),
          createdDate: new FormControl(data.createdDate, [Validators.required]),
        })
      }); ////////
    } else {
      console.log("je suis dans create")
      //initialiser les attribut de form a null
      this.form = new FormGroup({
        cin: new FormControl(null, [Validators.required]),
        name: new FormControl(null, [Validators.required]),
        type: new FormControl(null, [Validators.required]),
        createdDate: new FormControl(null, [Validators.required]),
      })
    }

    //si id existe et a une valeur
    //getMemberById ()=>  Member => extraire et placer dans le form

  }
  onSub(): void { //recup les donnes de l user 
    const currentId = this.activatedRoute.snapshot.params["id"] //snapsot-> capture d  image et params decompose 
    if (currentId) {
      console.log("je suis dans edit")
      this.MS.edit(currentId, this.form.value).subscribe(() => {

        this.router.navigate([''])

      });
    } else {
      console.log("je suis dans create")
      console.log(this.form.value);
      this.MS.addMember(this.form.value).subscribe(() => {
        this.router.navigate([''])
      });
    }

  }

}
