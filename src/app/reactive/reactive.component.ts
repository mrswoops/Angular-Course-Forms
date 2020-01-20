import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];
  forbiddenEmails = [];

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        "username": new FormControl(null, [Validators.required, this.forbiddenUsernamesValidator.bind(this)]),
        "email": new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmailsValidator)
      }),
      "gender": new FormControl('male'),
      "hobbies": new FormArray([])
    });
    this.signupForm.valueChanges.subscribe((control) => {
      console.log(control.userData.username);
    });
    this.signupForm.statusChanges.subscribe((status) => {
      console.log(status);
    });
    this.signupForm.setValue({
      userData: {
        "username": 'Max',
        "email": "test@test.com"
      },
      "gender": "male",
      "hobbies": []
    });
    this.signupForm.patchValue({
      userData: {
        "username": 'Anna'
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset({ "gender": "male" });
  }

  onAddHobby() {
    (<FormArray>this.signupForm.get('hobbies')).push(new FormControl(null, Validators.required));
  }

  get hobbies() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  forbiddenUsernamesValidator(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) != -1) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }

  forbiddenEmailsValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ 'emailIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
