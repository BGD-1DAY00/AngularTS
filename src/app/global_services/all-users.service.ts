import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';


export interface IUser{
  name: string,
  password:string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class AllUsersService {
  allUser: IUser[]=[]
  userExists: boolean
  currentUser: IUser;
  constructor(private router: Router) { }

  addUser(user:IUser){
    try{
      for (const curr of this.allUser) {
          if(curr.email === user.email){
            throw new Error("User already exists!");
          }
      }
      this.allUser.push(user)
      this.userExists = false
      this.currentUser = user;
      this.router.navigate(["/home"])
    }catch(e){
        this.userExists = true;        
      }
    }

  signInUser(name: string, email: string, password?: string){
    for (const user of this.allUser) {
      if(user.email === email && name === user.name)
        this.router.navigate(["/home"])
        this.currentUser = {name: name, email: email, password: ''}
    }
  }
  
}
