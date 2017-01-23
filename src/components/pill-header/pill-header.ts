import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';

import {MenuPopOverComponent} from "../menu-pop-over/menu-pop-over";


@Component({
  selector: 'pill-header',
  templateUrl: 'pill-header.html'
})
export class PillHeaderComponent {

  constructor(public popoverCtrl: PopoverController) {

  }

  openPopOver(event) {
    let popover = this.popoverCtrl.create(MenuPopOverComponent);
    popover.present({
      ev: event
    });
  }

}
