import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireDatabase } from 'angularfire2/database'

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

class item {
  name:string
  item:string
  quantity:string
  id:string
  constructor(){}
}


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  // push to the data base directly from here
  // including the crud operations
  // push to common data base in the description
  // 

  item: item = new item();

  private homepage;
  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.homepage= HomePage;
    // update the db with the need value if its is finalized

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
  // send to the db from 
  sendtoDB(){
    //alert('item added ');
    //let itemname = document.getElementById("inputname").TEXT_NODE;
    //console.log(itemname);
    // send to firebase from here.
    //this._data.setItem(this.item);

    this.db.list('Items').push(this.item);  
    this.item = new item();
    this.navCtrl.pop(this.homepage);
  }
}
