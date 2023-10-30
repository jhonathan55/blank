import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserI, UserResponseI } from './user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN = 'token';
  private _http=inject(HttpClient)
  constructor() { }

  login(user:UserI){
    return this._http.post<UserResponseI>('http://localhost:3000/auth/login',user).pipe(
       tap((res) => {
         console.log(res);
         this.saveToken(res);
       }),
    )
  }
  saveToken(user: UserResponseI) {
    const { message, ...rest } = user;
    localStorage.setItem(this.TOKEN, JSON.stringify(rest.token));
  }
}
