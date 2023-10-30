import { Component, NgZone, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { UserI } from './user';
import { Subscription, tap } from 'rxjs';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  private _fb = inject(FormBuilder)
  private _authSvc = inject(AuthService)
  private _router = inject(Router)
  // private _navCtrl=inject(NavController)
  // private _zone=inject(NgZone)
  private subscription: Subscription = new Subscription();
  hide = true;
  private isValidEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  // Validators.pattern(this.isValidEmail)
  loginForm = this._fb.group({
    email: ['', [Validators.required, Validators.pattern(this.isValidEmail)]],
    password: ['', Validators.required]
  })

  onLogin() {
    console.log(this.loginForm.value);
    const user: UserI = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.subscription.add(
      this._authSvc.login(user).pipe(
        tap((res) => {
          console.log(res);
         this._router.navigate(['crm/action-sheet']);
        })
      ).subscribe()
    )
  }
  //valida los input
  isValidField(field: string): string {
    const validatedField = this.loginForm.get(field);
    return (!validatedField?.valid && validatedField?.touched) ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }
}
