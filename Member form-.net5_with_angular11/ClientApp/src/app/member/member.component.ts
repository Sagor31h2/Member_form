import { MemberService } from "./../shared/member.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styles: [
  ]
})
export class MemberComponent implements OnInit {

  constructor(public service: MemberService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

}
