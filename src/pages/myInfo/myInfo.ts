import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-myInfo',
  templateUrl: 'myInfo.html'
})
export class InfoPage {

  constructor(public navCtrl: NavController) {

  }

  goHome(){
  	this.navCtrl.push(HomePage)
  }

}
