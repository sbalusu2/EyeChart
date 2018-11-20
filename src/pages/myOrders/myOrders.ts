import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-myOrders',
  templateUrl: 'myOrders.html'
})
export class OrdersPage {

  constructor(public navCtrl: NavController) {

  }

  goHome(){
  	this.navCtrl.push(HomePage)
  }

}
