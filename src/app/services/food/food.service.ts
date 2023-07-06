import { Injectable } from '@angular/core';
import { foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  static getAll() {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getFoodById(id:number):foods{
   return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string):foods[]{
    return tag == "All"?
    this.getAll() : this.getAll().filter(food => food.tags?.
      includes(tag));

  }




  getAllTag():Tag[]{
    return[
      { name:'All',count:8},
      { name:'Fastfood',count:4},
      { name:'Pizza',count:4},
      { name:'Lunch',count:3},
      { name:'SlowFood',count:2},
      { name:'Hamburger',count:1},
      { name:'Fry',count:1},
      { name:'Soup',count:1}
    ];
  }

  getAll():foods[]{
    return[
   {
    id:1,
    name:"Pizza Pepperoni",
    cookTime:'10-20',
    price:18,
    favorite:false,
    origins:['italy'],
    star:4.5,
    imageUrl:'/assets/food1.webp',
    tags:['Pizza','Lunch'],
   },
   {
    id:2,
    name:"Meatball",
    cookTime:'20-30',
    price:25,
    favorite:true,
    origins:['persia','middle east','china'],
    star:4.7,
    imageUrl:'/assets/food10.jpg',
    tags:['Fastfood','Lunch'],
   },
   {
    id:3,
    name:"Hamburger",
    cookTime:'10-15',
    price:10,
    favorite:false,
    origins:['persia','middle east','china'],
    star:4.5,
    imageUrl:'/assets/food11.jpg',
    tags:['Fastfood','Hamburger'],
   },
   {
    id:4,
    name:"Fride potatoes",
    cookTime:'10-20',
    price:5,
    favorite:true,
    origins:['beigium fancy indian'],
    star:4.5,
    imageUrl:'/assets/food9.jpg',
    tags:['SlowFood','Fry'],
   },
   {
    id:5,
    name:"Chicken Soup",
    cookTime:'10-20',
    price:15,
    favorite:false,
    origins:['persia','middle east','china'],
    star:4.5,
    imageUrl:'/assets/food5.jpg',
    tags:['Soup','SlowFood'],
   },
   {
    id:6,
    name:"Vegitables Pizza",
    cookTime:'10-20',
    price:35,
    favorite:true,
    origins:['indian'],
    star:4.5,
    imageUrl:'/assets/food12.jpg',
    tags:['Fastfood','Pizza','Lunch'],
   },
   {
    id:7,
    name:"Vegitables burger",
    cookTime:'20-30',
    price:40,
    favorite:false,
    origins:['indian'],
    star:4.0,
    imageUrl:'/assets/food7.jpg',
    tags:['Fastfood','Pizza'],
   },
   {
    id:8,
    name:"Vegetables spicy Pizza",
    cookTime:'10-20',
    price:70,
    favorite:false,
    origins:['indian'],
    star:4.5,
    imageUrl:'/assets/food8.jpg',
    tags:['Pizza'],
   },


    ]
  }
}
