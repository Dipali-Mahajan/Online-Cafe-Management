import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

registration="registration service api file"
  //array of objects[{},{}]

table = [
  {
    firstname:"Dipali",
    lastname:"Mahajan",
    email:"m@gmail.com",
    mobilenumber:80,
    address:"abc"
  },
  {
    firstname:"Heet",
    lastname:"Mahajan",
    email:"h@gmail.com",
    mobilenumber:80,
    address:"pqr"
  },
  {
    firstname:"Kamlesh",
    lastname:"Mahajan",
    email:"k@gmail.com",
    mobilenumber:80,
    address:"xyz"
  }
]
}
