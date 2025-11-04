import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated:boolean=false
  constructor() { }

  singIn(){
      this.isAuthenticated=true;
  }
   singOut(){
      this.isAuthenticated=false
  }
}
