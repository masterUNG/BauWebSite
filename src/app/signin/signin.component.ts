import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  onClickSubmit(feedBackForm: NgForm) {
    // for email
    this.email = feedBackForm.value.emailString;
    console.log('email ==> ' + this.email);

    // for Password
    this.password = feedBackForm.value.passwordString;
    console.log('password ==> ' + this.password);

    if (this.checkEmailAnPass()) {
      console.log("Have Space");
      this.myAlertDialog('Have Space', 'Please Fill All Blank');
    } else {
      console.log("No Space");
    }

  }

  myAlertDialog(title: String, message: String): void {
    alert(title + "\n" + message);
  }

  checkEmailAnPass(): boolean{
    return ((this.email.length == 0) || (this.password.length == 0));
  }


}
