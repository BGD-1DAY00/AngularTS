import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AllUsersService } from '../global_services/all-users.service';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  @ViewChild('form') userForm: NgForm;
  userSignIn: boolean;
  constructor(private allUserService: AllUsersService) {}

  ngOnInit(): void {}
  
  submit(form){
    this.allUserService.addUser({name: form.value.name, email: form.value.email, password: form.value.password})
    this.userSignIn = true
      if(this.allUserService.userExists){
        this.userSignIn = false
      }
      console.log(this.allUserService.allUser);
      
  }
  reset(){
    this.userForm.reset();
  }
}
