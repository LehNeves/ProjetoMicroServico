import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { AuthService } from '../core/services/auth.service';
import { IUser } from './login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide = true;

  form: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router
  ) {
    this.form = formBuilder.group({
      user: [null, [Validators.required]],
      password: [null, [Validators.required]]
    }, { updateOn: 'blur' });
  }

  auth(): void {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();

    if (this.form.invalid)
      return;

    const user: IUser = {
      user: this.form.controls['user'].value,
      password: this.form.controls['password'].value
    }

    this.authService.login(user).pipe(tap(() => console.log("Autorizando."))).subscribe(() => this.route.navigate(['/home']));
  }
}
