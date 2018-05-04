import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
/**
 * Generated class for the RemovePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

class item {
  name:string
  item:string
  quantity:string
  id:string
  checkedState:false
  constructor(){}
}


@IonicPage()
@Component({
  selector: 'page-remove',
  templateUrl: 'remove.html',
})
export class RemovePage {

  item:item = new item(); // this is of item type
  
  itemname: Observable<any[]>;
  itemkeyList = new Array();
  itemList:AngularFireList<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public db: AngularFireDatabase ) {
    this.itemList = db.list('Items') ;  // gets the data from the list to the page
    this.itemname = this.itemList.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  getsCheckedList(itemkey){
    this.itemkeyList.push(itemkey)
  }
  
  convertToArray(itemname){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemovePage');
  }

  remove(){
    this.itemkeyList.forEach(element => {
      this.itemList.remove(element)
    });
  }

}
