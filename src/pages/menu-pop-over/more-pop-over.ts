import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {PillSettingsPage} from "../pill-settings/pill-settings";


@Component({
    selector: 'page-more-pop-over',
    templateUrl: 'more-pop-over.html'
})
export class MorePopOverPage {
    settingsPage = PillSettingsPage;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MorePopOverPage');
    }

}
