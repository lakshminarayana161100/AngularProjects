import { Component, OnInit, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    firstname: new FormControl(""),
    lastname: new FormControl(""),
    email: new FormControl(""),
    mobile: new FormControl(""),
    gender: new FormControl(""),
    pwd: new FormControl(""),
    rpwd: new FormControl("")
  });
  registerSubmited(){
    console.log(this.registerForm.value);
  }
}
