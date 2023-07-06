import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { registration } from '../registration';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{


  constructor(){}

  registerForm:any;
  ngOnInit(): void {
     this.registerForm= new FormGroup({
      "firstname":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "lastname":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "emailid":new FormControl(null,[Validators.required,Validators.email]),
      "mobilenumber":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      "address": new FormControl(null,[Validators.required])
     });
  }
  submitData(){
    alert('registration succsefully');
  }
    get firstname(){
      return this.registerForm.get('firstname')
    }
    get lastname(){
      return this.registerForm.get('lastname')
    }
    get emailid(){
      return this.registerForm.get('emailid')
    }
    get mobilenumber(){
      return this.registerForm.get('mobilenumber')
    }
    get address(){
      return this.registerForm.get('address')
    }
}
