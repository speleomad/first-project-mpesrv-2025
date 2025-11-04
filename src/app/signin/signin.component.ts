import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent  implements OnInit{
  isAuthenticated!:boolean;
    constructor(private authService:AuthService){}

  ngOnInit(): void {
    this.isAuthenticated=this.authService.isAuthenticated;
  }

}
