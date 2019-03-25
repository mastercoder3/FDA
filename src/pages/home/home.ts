import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular'; 
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  MainList: Array<any>;
  showSearch: any; 

  constructor(public navCtrl: NavController) {
    this.MainList=[{offer: 1},{offer: 0},{offer: 1},{offer: 0},{offer: 1},{offer: 0},{offer: 1},{offer: 0}]
  }

  toggleSearch(){
   this.showSearch = !this.showSearch;
 }

 activeLike(item){
   item.like = !item.like;
 }

}
