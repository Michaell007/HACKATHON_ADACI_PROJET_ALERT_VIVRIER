import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup  } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm = this.fb.group({
    identifiant: ['', [Validators.required]],
    password: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private localStorageService: LocalStorageService) { }

  userConnected?: User;
  isSubmit = true;

  onSubmit() {

    if (this.loginForm.valid) {
      let result = this.authService.login(this.loginForm.controls["identifiant"].value!, this.loginForm.controls["password"].value!);
      if (result != undefined) {
        this.userConnected = result;
        this.localStorageService.setLocalStorage("userConnected", JSON.stringify(this.userConnected));
        this.localStorageService.setLocalStorage("isAuth", true);

        // redirection vers page admin
      } else {
        this.isSubmit = false;
      }
    }

  }

  ngOnInit(): void {
    
  }

}
