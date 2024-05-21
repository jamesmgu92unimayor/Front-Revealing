import { Component } from '@angular/core';
import { GeneralService } from '../../core/services/general.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(public generalApi: GeneralService, public router: Router) { }

  email = new FormControl("")
  password = new FormControl("")

  validLoginAndSubmit() {
    const email = this.email.value
    const password = this.password.value
    const that = this
    this.generalApi.postLogin(email || "", password  || "").subscribe({
      next:(value) => {
        console.log(value)
        that.router.navigate(["home"])
      }, error(err) {
        console.error(err)
      },
    })
  }

}
