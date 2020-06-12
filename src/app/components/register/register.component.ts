import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrossFieldErrorMatcher } from '../form-data-controllers/cross-field-error-matcher';
import { passwordsDoNotMatch } from '../form-data-controllers/passwords-do-not-match.validator';
import { FormComponentBase } from '../form-data-controllers/form-component-base';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends FormComponentBase implements OnInit, AfterViewInit {

  @ViewChild('name') firstItem: ElementRef;

  form!: FormGroup;
  hidePassword: boolean = true;
  errorMatcher = new CrossFieldErrorMatcher();

  constructor(private formBuilder: FormBuilder, private router:Router) {
    super();

    this.validationMessages = {
      name: {
        required: 'Your name is required'
      },
      lastname: {
        required: 'Your lastname is required'
      },
      userName: {
        required: 'User name is required.',
        minlength: 'User name minimum length is 6.',
        maxlength: 'User name maximum length is 15.',
        pattern: 'User name minimum length 6, allowed characters letters, numbers only. No spaces.'
      },
      password: {
        required: 'Password is required.',
        minlength: 'Password minimum length is 6.',
        maxlength: 'Password maximum length is 15.',
        pattern: 'Password minimum length 6, requires one letter, one number, one special character !@#$%^&* no spaces.'
      },
      confirmPassword: {
        required: 'Confirm password is required.',
        minlength: 'Confirm password minimum length is 6.',
        maxlength: 'Confirm password maximum length is 15.',
        pattern: 'Confirm password minimum length 6, requires one letter, one number, one special character !@#$%^&* no spaces.',
        passwordsDoNotMatch: 'Passwords must match.'
      },
      email: {
        required: 'Email is required.',
        email: 'Email is not properly formatted.',
      },
      passwordsGroup: {
        passwordsDoNotMatch: 'Passwords must match.'
      }
    };

    this.formErrors = {
      name: '',
      lastname: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      passwordsGroup: ''
    };
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]*$')]],
      lastname: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]*$')]],
      userName: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.pattern('^[a-zA-Z0-9]*$')]],
      email: ['', [
        Validators.required,
        Validators.email]],
      passwordsGroup: this.formBuilder.group({
        password: ['', [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$')]],
        confirmPassword: ['', [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$')]],
      }, { validators: passwordsDoNotMatch })
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.firstItem.nativeElement.focus();
    }, 250);
    this.startControlMonitoring(this.form);
  }

  registerClicked(): void {
    if (this.form.invalid) {
      return;
    } else {
      alert('Registro completo');
      this.router.navigate(['/login',]);
    }    
  }
}

