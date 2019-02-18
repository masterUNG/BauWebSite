import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private email: String;
  private password: String;

  constructor() { }

  ngOnInit() {
    this.email = '';
    this.password = '';
  }

  onClickSubmit() {
    console.log('You Click Submit');
  }


}
