import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
    selector: 'page-pill-cracker',
    templateUrl: 'pill-cracker.html'
})
export class PillCrackerPage {
    pillDate: string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.pillDate = new Date().toISOString();
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad PillCrackerPage');
    }
}
