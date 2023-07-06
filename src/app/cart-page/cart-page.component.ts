import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/cartitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  cart!:Cart;
  constructor(private cartService:CartService,){

    this.setCart();
  }
ngOnInit(): void {
}
  setCart(){
    this.cart=this.cartService.getCart();
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity =parseInt(quantityInString)
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  num:number=5

  // registerForm:any;
  // ngOnInit(): void {
  //    this.registerForm= new FormGroup({
  //     "firstname":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
  //     "lastname":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
  //     "emailid":new FormControl(null,[Validators.required,Validators.email]),
  //     "mobilenumber":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
  //     "address": new FormControl(null,[Validators.required])
  //    });
  // }
  // submitData(){
  //   alert('registration succsefully');
  // }
  //   get firstname(){
  //     return this.registerForm.get('firstname')
  //   }
  //   get lastname(){
  //     return this.registerForm.get('lastname')
  //   }
  //   get emailid(){
  //     return this.registerForm.get('emailid')
  //   }
  //   get mobilenumber(){
  //     return this.registerForm.get('mobilenumber')
  //   }
  //   get address(){
  //     return this.registerForm.get('address')
  //   }

  //-----------------------------------------------------------------------------------------------------------
  // ngOnInit(): void {
  //   this.contactForm= new FormGroup({
  //     "fullname":new FormControl(null,[Validators.required]),
  //     "emailid":new FormControl(null,[Validators.required,Validators.email]),
  //     "mobilenumber":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
  //     "address": new FormControl(null,[Validators.required])
  //    });
  // }
  // submitData(){
  //   alert('Thank you, we will contact you shortly!!!!');
  // }
  //   get fullname(){
  //     return this.contactForm.get('fullname')
  //   }
  
  //   get emailid(){
  //     return this.contactForm.get('emailid')
  //   }
  //   get mobilenumber(){
  //     return this.contactForm.get('mobilenumber')
  //   }
  //   get address(){
  //     return this.contactForm.get('address')
  //   }



  submitData(){
      alert('Oerder placed successfully!!!!');
    }
    
}
