import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assignment-reactive',
  templateUrl: './assignment-reactive.component.html',
  styleUrls: ['./assignment-reactive.component.css']
})
export class AssignmentReactiveComponent implements OnInit {
  projectForm: FormGroup;
  submitted = false;

  constructor() { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      "name": new FormControl(null, Validators.required, this.nameValidator),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "status": new FormControl("stable")
    });
  }

  onSubmit() {
    console.log(this.projectForm);
    this.submitted = true;
  }

  /* nameValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value && control.value.toLowerCase() === "test") {
      return { 'Project name cannot be \'test\'': true };
    } else {
      return null;
    }
  } */

  nameValidator(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value && control.value.toLowerCase() === "test") {
          resolve({ 'Project name cannot be \'test\'': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }
}
