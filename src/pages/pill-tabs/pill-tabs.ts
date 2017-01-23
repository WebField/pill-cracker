import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PillCrackerPage } from '../pill-cracker/pill-cracker';
import { PillOverviewPage } from '../pill-overview/pill-overview';

@Component({
    templateUrl: 'pill-tabs.html'
})

export class PillTabs {
    pages: any[];

    constructor(public navCtrl: NavController) {
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

}
