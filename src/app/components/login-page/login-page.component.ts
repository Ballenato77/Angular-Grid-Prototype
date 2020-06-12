import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent{

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],

    });
  }
  submit() {
    if (this.form.valid) {
      console.log(this.form.value)
    }
    else {
      alert("FILL ALL FIELDS")
    }
  }

}

/*import { AutenticacionService } from './../services/autenticacion.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private autenticacionService:AutenticacionService, private router:Router) { }

  ngOnInit(): void {
  }

  async intentarLogin(){
    const {email,password} = this.loginForm.value;
    try{

      const user = await this.autenticacionService.login(email,password);
      if(user){
        //Redireccionar a home
        this.router.navigate(['/home']);
      }
    }catch(error){
      console.log(error);
    }


  }
}
*/
