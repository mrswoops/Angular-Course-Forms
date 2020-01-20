import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment-template',
  templateUrl: './assignment-template.component.html',
  styleUrls: ['./assignment-template.component.css']
})
export class AssignmentTemplateComponent implements OnInit {
  @ViewChild('form', { static: false }) signupForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSub = 'Pro';
  submitted = false;
  user = {
    email: '',
    password: '',
    subscription: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.password;
    this.user.subscription = this.signupForm.value.sub;
    this.signupForm.reset();
  }
}
