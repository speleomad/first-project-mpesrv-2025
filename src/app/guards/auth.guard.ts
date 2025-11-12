import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let authService:AuthService = inject(AuthService);
  let router:Router = inject(Router)
  if (authService.isAuthenticated()) return true;
  else {
    router.navigateByUrl("/signin");
    return false;
  }
};
