import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular'; 
@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class Categories {
 
  showSearch: any;
  category: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.category=[{title: 'Cheese Pizza', subtitle: 'Multiple chiocies For Cheese pizza Lovers', img: 'assets/img/11.png'},{title: 'Chicken Pizza', subtitle: 'Multiple chiocies For Cheese pizza Lovers', img: 'assets/img/22.png'},{title: 'Beef Pizza', subtitle: 'Multiple chiocies For Cheese pizza Lovers', img: 'assets/img/33.png'},{title: 'Sea Fruit Pizza', subtitle: 'Multiple chiocies For Cheese pizza Lovers', img: 'assets/img/44.png'},{title: 'Cheese Pizza', subtitle: 'Multiple chiocies For Cheese pizza Lovers', img: 'assets/img/11.png'},{title: 'Chicken Pizza', subtitle: 'Multiple chiocies For Cheese pizza Lovers', img: 'assets/img/22.png'}]
  }

  toggleSearch(){
   this.showSearch = !this.showSearch;
 }

}
