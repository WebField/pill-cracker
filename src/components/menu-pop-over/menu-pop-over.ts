import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {PillSettingsPage} from "../../pages/pill-settings/pill-settings";



@Component({
    selector: 'page-menu-pop-over',
    templateUrl: 'menu-pop-over.html'
})
export class MenuPopOverComponent {
    settingsPage = PillSettingsPage;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MenuPopOverPage');
    }

}
