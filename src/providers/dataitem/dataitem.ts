
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs'
/*
  Generated class for the DataitemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataitemProvider {
  items:ReplaySubject<{}> = new ReplaySubject<{}>()
  
  constructor() {
    console.log('Hello DataitemProvider Provider');
  }

  get Items(){
    return this.items;
  }
  // sets the items for positioning
  setItem(item){
    this.items.next(item);
  }
}
