import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';


@Component({
  selector: 'page-pill-settings',
  templateUrl: 'pill-settings.html'
})
export class PillSettingsPage {
  selectedPill: string;
  firstPillDate: string = new Date().toISOString();
  placebo: boolean;
  pillTypes: {}[];  //Array of Objects
  reminderTime: string = new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pillTypes = [
      {value: "21 + 7"},
      {value: "22 + 6"},
      {value: "23 + 5"},
      {value: "24 + 4"},
      {value: "25 + 3"},
      {value: "26 + 2"},
      {value: "27 + 1"},
      {value: "28"},
      {value: "35 + 7"},
      {value: "42 + 7"},
      {value: "63 + 7"}
    ];
    this.selectedPill = "21 + 7";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PillSettingsPage');
  }

}
