import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { DetailPage } from '../detail/detail'
import { RemovePage } from '../remove/remove';
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'page-view-data',
  templateUrl: 'view-data.html'
})

export class ViewDataPage {
  items = [];
  // array of pushing data to the description
  //public nameofitems = new Array();

  nameofitems: Observable<any[]>;

  private detailpage;
  private removepage;

  constructor(public navControl: NavController, public db: AngularFireDatabase) {

    this.detailpage = DetailPage;
    this.removepage = RemovePage;

    //this._data.items.subscribe((item) => {this.nameofitems.push(item)})
    this.nameofitems = db.list('Items').valueChanges();



    /*
    this.nameofitems.push({ name: "Coconut", item: "Fruit", quantity:"12", id:1});
    this.nameofitems.push({ name: "Mango", item: "Fruit", quantity: "120", id: 2 });
    this.nameofitems.push({ name: "Guava", item: "Fruit", quantity: "10", id: 3 });
    this.nameofitems.push({ name: "PineApple", item: "Fruit", quantity: "14", id: 4 });
    this.nameofitems.push({ name: "Apple", item: "Fruit", quantity: "13", id: 5 });
    this.nameofitems.push({ name: "Tea", item: "Beverages", quantity: "20", id: 6 });
    this.nameofitems.push({ name: "Pepsi", item: "Beverages", quantity: "25", id: 7 });
    this.nameofitems.push({ name: "Coke", item: "Beverages", quantity: "18", id: 8 });
    this.nameofitems.push({ name: "Tomato", item: "Vegetable", quantity: "14", id: 9 });
    this.nameofitems.push({ name: "Potato", item: "Vegetable", quantity: "200", id: 10 });
    this.nameofitems.push({ name: "Pumkin", item: "Vegetable", quantity: "167", id: 11 });
    this.nameofitems.push({ name: "Onion", item: "Vegetable", quantity: "110", id: 12 });        
    */


    for (var i = 0; i < 30; i++) {
      this.items.push(this.items.length)
    }
  }

  // added an item from the page
  addItem(name) {
    console.log(name);
    this.navControl.push(this.detailpage);

    // do the addition part in here



  }
  // remove an item from the page
  removeItem(name) {
    console.log(name);
    this.navControl.push(this.removepage);
  }

  doInfinite(): Promise<any> {
    console.log('Begin of asynchronous Operation');
    return new Promise((resolve) => {
      setTimeout(() => {
        for (var i = 0; i < 30; i++) {
          this.items.push(this.items.length);
        }

        console.log('Async operation has ended');
        resolve()
      }, 500);
    })
  }

  // do the button click events in here 




}