import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular'; 

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  cartList: Array<any>; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cartList=[{img: 'assets/img/det-img.png', qty: 1},{img: 'assets/img/det-img.png', qty: 1}]
  }

  // increment product qty
  incrementQty(item) {
    item.qty += 1;
  }

  // decrement product qty
  decrementQty(item) {
    if(item.qty-1 < 1 ){
      item.qty = 1
    }else{
      item.qty -= 1;
    }
  }

  removeItem(item){
    for(var i = 0; i < this.cartList.length; i++) {
 
      if(this.cartList[i] == item){
        this.cartList.splice(i, 1);
      }
 
    }
  }

}
