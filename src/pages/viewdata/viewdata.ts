import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'

@Component({
    selector:'view-data',
    templateUrl: 'viewdata.html'
})

export class ViewDataPage {
    items = [];
    constructor(public navControl:NavController){
        for(var i=0; i<30;i++){
            this.items.push(this.items.length)
        }
    }

    doInfinite(): Promise<any> {
        console.log('Begin of asynchronous Operation');
        return new Promise((resolve) => {
            setTimeout(() => {
                for(var i=0; i<30 ; i++){
                    this.items.push(this.items.length);
                }

                console.log('Async operation has ended');
                resolve()
            }, 500);
        })
    }
}