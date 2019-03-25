import { Component } from '@angular/core';
import { NavController, NavParams, Keyboard, IonicPage } from 'ionic-angular'; 


@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  selectImg: any; 
  constructor(public navCtrl: NavController, public navParams: NavParams, public keyboard: Keyboard) {
  }

  activeSelect(index){
    this.selectImg = index;
  }

  focusInput(input){
    input.disabled=!input.disabled;
    if(!input.disabled){
      input.setFocus();
      this.keyboard.isOpen(); // Android Mobiles
    }
  }

}
