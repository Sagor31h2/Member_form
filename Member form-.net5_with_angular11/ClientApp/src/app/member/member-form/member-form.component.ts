import { MemberService } from "./../../shared/member.service";
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styles: [
  ]
})
export class MemberFormComponent implements OnInit {

  constructor(public service: MemberService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {

    this.service.postMember().subscribe(
      res => { },
      err => { }
    )

  }

}
