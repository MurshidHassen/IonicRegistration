import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ViewDataPage } from '../view-data/view-data';
import { DetailPage } from '../detail/detail';
import { RemovePage } from '../remove/remove';

@IonicPage()
@Component({
  selector: 'page-datacontrol',
  templateUrl: 'datacontrol.html',
})

export class DatacontrolPage {


  private viewpage;
  private addpage;
  private remove;
  constructor(public navCtrl: NavController) {
    this.viewpage = ViewDataPage;
    this.addpage = DetailPage;
    this.remove = RemovePage;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatacontrolPage');
  }
 
  viewdata(){
   this.navCtrl.push(this.viewpage);
  }

  addata(){
    this.navCtrl.push(this.addpage);
  }

  removedata(){
    this.navCtrl.push(this.remove);
  }

  editdata(){
    // add the editing page
  }
}
