import { Members } from "./member.model";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) {

  }
  readonly _baseUrl = "http://localhost:13089/api/Member";
  formData: Members = new Members();

  postMember() {
    return this.http.post(this._baseUrl, this.formData);
  }


}
