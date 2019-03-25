import { Component } from '@angular/core';
import { NavController, NavParams, Platform , ViewController, ModalController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-share-modal',
  templateUrl: 'share-modal.html'
})
export class ShareModal {

 
  constructor(public navCtrl: NavController, public navParams: NavParams,
                public platform : Platform, public modalCtrl: ModalController, public viewCtrl: ViewController) {}


   close() {
    this.viewCtrl.dismiss(); // This works fine
  }

}
