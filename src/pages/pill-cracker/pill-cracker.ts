import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { MorePopOverPage } from "../menu-pop-over/more-pop-over";
import {PillSettingsPage} from "../pill-settings/pill-settings";

/*
 Generated class for the PillCracker page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-pill-cracker',
    templateUrl: 'pill-cracker.html'
})
export class PillCrackerPage {
    pillDate: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
        this.pillDate = new Date().toISOString();
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad PillCrackerPage');
    }

    openPopOver(event) {
        let popover = this.popoverCtrl.create(MorePopOverPage);
        popover.present({
            ev: event
        });
    }
}
