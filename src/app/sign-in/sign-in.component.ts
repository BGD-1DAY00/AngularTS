import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AllUsersService } from '../global_services/all-users.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  userForm: FormGroup;
  userSignIn: boolean 
  constructor(private allUserService: AllUsersService) { }

  ngOnInit(): void {
    this.initForm()
  }

  private initForm(){
    this.userForm = new FormGroup({
      'name': new FormControl(null),
      'password': new FormControl(null),
      'email': new FormControl(null)
    });
  }
  submit(){
      this.allUserService.signInUser(this.userForm.value.name, this.userForm.value.email)
      console.log(this.allUserService.allUser);
  }
}
