import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  // City Names
  City: any = ['New Delhi', 'Patna', 'Ranchi', 'Delhi', 'Kolkata', 'Allahabad', 'Lucknow', 'Kashmir', 'Hyderabad', 'Bengaluru', 'Others']
  username = new FormControl('', [
    Validators.required,
    Validators.email

  ])
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[!,@,#,$,%]).{6,}')
  ])
  cpassword = new FormControl('', [
    Validators.required,

  ])
  gender = new FormControl('',
    Validators.required

  )
  cityName = new FormControl('', [
    Validators.required
  ])
  phone = new FormControl('', [
    Validators.required,
    Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")

  ])
  registerForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: this.username,
      password: this.password,
      cpassword: this.cpassword,
      gender: this.gender,
      cityName: this.cityName,
      phone: this.phone

    }, {
      validator: this.MustMatch('password', 'cpassword')
    }

    )
  }
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
  onRegister() {
    console.log(this.registerForm);

  }

  ngOnInit(): void {
  }


  get f() { return this.registerForm.controls; }



  changeCity(e) {
    this.cityName.setValue(e.target.value, {
      onlySelf: true
    })
  }

}
