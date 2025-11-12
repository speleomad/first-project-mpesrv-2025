import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth:boolean=false
  constructor() { }

  singIn(){
      this.isAuth=true;
  }
   singOut(){
      this.isAuth=false
  }
  isAuthenticated():boolean{
     return this.isAuth
  }
}
