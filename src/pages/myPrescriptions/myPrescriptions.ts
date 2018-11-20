import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-myPrescriptions',
  templateUrl: 'myPrescriptions.html'
})
export class PrescriptionsPage {

  constructor(public navCtrl: NavController) {

  }

  goHome(){
  	this.navCtrl.push(HomePage)
  }

}
