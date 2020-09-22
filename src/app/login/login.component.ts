import { AbstractClassPart } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    
  loginForm: FormGroup;
  userData: any;
  authenticationError = '';

  constructor(
    private _router: Router,
    private _loginService: LoginService,
    private formBuilder: FormBuilder
  ) { }

  get f() { return this.loginForm.controls; }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this._loginService.getUserDataFromURL().subscribe(data => this.userData = data);
  }

  login(): void {

    if(this.f.username.value === this.userData.username && this.f.password.value === this.userData.password){

     this._router.navigateByUrl("/user");

    }else {

      this.authenticationError = "Invalid Credentials."
    }
  }
}
