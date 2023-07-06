import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

contactForm :any;

constructor(){}
ngOnInit(): void {
  this.contactForm= new FormGroup({
    "fullname":new FormControl(null,[Validators.required]),
    "emailid":new FormControl(null,[Validators.required,Validators.email]),
    "mobilenumber":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
    "address": new FormControl(null,[Validators.required])
   });
}
submitData(){
  alert('Thank you, we will contact you shortly!!!!');
}
  get fullname(){
    return this.contactForm.get('fullname')
  }

  get emailid(){
    return this.contactForm.get('emailid')
  }
  get mobilenumber(){
    return this.contactForm.get('mobilenumber')
  }
  get address(){
    return this.contactForm.get('address')
  }
}
