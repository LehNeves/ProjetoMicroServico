import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, Observable, of, tap } from "rxjs";

import { IUser } from "src/app/login/login.interface";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isLogged = false;

  redirectUrl: string | null = null;

  constructor(private http: HttpClient) {}

  login(user: IUser): Observable<boolean> {
    return of(true).pipe(delay(1000), tap(() => this.isLogged = true));
    return this.http.get<boolean>("");
  }

  logout(): void {
    this.isLogged = false;
  }
}