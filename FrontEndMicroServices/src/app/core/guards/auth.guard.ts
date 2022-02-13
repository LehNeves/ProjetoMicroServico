import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): true | UrlTree {
    const url: string = state.url;

    console.log("Acessando a Guarda de rota de Autenticacao.");
    return this.checkLogin(url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): true | UrlTree {
    return this.canActivate(childRoute, state);
  }

  checkLogin(url: string): true | UrlTree {
    if (this.authService.isLogged)
      return true;

    this.authService.redirectUrl = url;

    return this.router.createUrlTree(['/login']);
  }
}