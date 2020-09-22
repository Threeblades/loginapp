import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _userdataURL = 'assets/user.json';
  private userData: any;

  constructor(private _http: HttpClient) {   
  }

  public getUserDataFromURL() {
    return this._http.get(this._userdataURL).pipe(map((response:any) => {return response;}));
  }
}
