import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userData: any;

  constructor(private _loginService: LoginService, private _router: Router) { }

  ngOnInit(): void {
    this._loginService.getUserDataFromURL().subscribe(data => this.userData = data);
  }


  public logout():void{
    this._router.navigateByUrl("/login");
  }

}
