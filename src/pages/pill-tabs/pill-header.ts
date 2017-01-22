import {Component} from '@angular/core';
import {PopoverController, NavController} from 'ionic-angular';

import {PillCrackerPage} from '../pill-cracker/pill-cracker';
import {PillOverviewPage} from '../pill-overview/pill-overview';
import {MorePopOverPage} from "../menu-pop-over/more-pop-over";

@Component({
    templateUrl: 'pill-header.html'
})

export class PillHeaderPage {
    pages: any[];

    constructor(public navCtrl: NavController, public  popoverCtrl: PopoverController) {
        this.pages = [
            {
                name: 'Pill Cracker',
                page: PillCrackerPage
            },
            {
                name: 'Pill Overview',
                page: PillOverviewPage
            }
        ];
    }

    openPopOver(event) {
        let popover = this.popoverCtrl.create(MorePopOverPage);
        popover.present({
            ev: event
        });
    }

}
