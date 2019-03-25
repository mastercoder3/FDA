import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, IonicPage } from 'ionic-angular'; 
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
 
  showSearch: any; 
  list: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.list=[{title: 'Cheese Pizza Lover', subtitle: 'Ingredients 1, Ingredients 2 Ingredients 3, Ingredients 4', img: 'assets/img/01.png'},{title: 'Cheese Pizza Lover', subtitle: 'Ingredients 1, Ingredients 2 Ingredients 3, Ingredients 4 ', img: 'assets/img/01.png'},{title: 'Cheese Pizza Lover', subtitle: 'Multiple chiocies For Cheese pizza Lovers', img: 'assets/img/01.png'},{title: 'Cheese Pizza Lover', subtitle: 'Multiple chiocies For Cheese pizza Lovers', img: 'assets/img/01.png'},{title: 'Cheese Pizza Lover', subtitle: 'Multiple chiocies For Cheese pizza Lovers', img: 'assets/img/01.png'},{title: 'Cheese Pizza Lover', subtitle: 'Multiple chiocies For Cheese pizza Lovers', img: 'assets/img/01.png'}];
  }

  toggleSearch(){
   this.showSearch = !this.showSearch;
 }

 presentshareModal() {
   let shareModal = this.modalCtrl.create('ShareModal', { userId: 8675309 });
   shareModal.present();
 }

 activeLike(item){
   item.like = !item.like;
 }

}
