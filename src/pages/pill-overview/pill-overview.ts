import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import {MorePopOverPage} from "../menu-pop-over/more-pop-over";

/*
  Generated class for the PillOverview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pill-overview',
  templateUrl: 'pill-overview.html'
})
export class PillOverviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PillOverviewPage');
  }

  openPopOver(event) {
    let popover = this.popoverCtrl.create(MorePopOverPage);
    popover.present({
      ev: event
    });
  }

}
