import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly storageKey = 'basicAuthToken';

  login(username: string, password: string): boolean {
    const token = 'Basic ' + btoa(`${username}:${password}`);
    localStorage.setItem(this.storageKey, token);
    return true;
  }

  getToken(): string | null {
    return localStorage.getItem(this.storageKey);
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}