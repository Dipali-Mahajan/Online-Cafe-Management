import { CartItem } from "./cartitem";

export class Cart{
  items:CartItem[]=[];

  get totalPrice():number{
    let totalPrice = 0;
    this.items.forEach(item => {

      totalPrice += item.price;

 //totalPrice=item.price*item.quantity;

    });
    return totalPrice;
  }
}
