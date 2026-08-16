import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;

  private user = {
    name: 'Tanishk Malara',
    email: 'tanishk@example.com',
    course: 'BCA'
  };

  login(email: string, password: string): boolean {

    if (email === 'tanishk@example.com' && password === '123456') {
      this.loggedIn = true;
      return true;
    }

    return false;
  }

  logout() {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getUser() {
    return this.user;
  }
}
