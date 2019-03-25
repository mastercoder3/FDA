import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, IonicPage } from 'ionic-angular'; 
@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  qty= 1; 
  Size= 2;
  like: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) { }

  // increment product qty
  incrementQty() {
    this.qty += 1;
  }

  // decrement product qty
  decrementQty() {
    if(this.qty-1 < 1 ){
      this.qty = 1
    }else{
      this.qty -= 1;
    }
  }

  presentFilterModal() {
   let Filter = this.modalCtrl.create('FilterPage', { userId: 8675309 });
   Filter.present();
 }

 activeSize(index){
   this.Size= index;
 }

 presentshareModal() {
   let shareModal = this.modalCtrl.create('ShareModal', { userId: 8675309 });
   shareModal.present();
 }

 activeLike(){
   this.like = !this.like;
 }

}
