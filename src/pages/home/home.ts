import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../myInfo/myInfo';
import { OrdersPage } from '../myOrders/myOrders';
import { AppointmentsPage } from '../myAppointments/myAppointments';
import { PrescriptionsPage } from '../myPrescriptions/myPrescriptions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goInfoPage(){
  	this.navCtrl.push(InfoPage)
  }
  goOrdersPage(){
  	this.navCtrl.push(OrdersPage)
  }
  goAppointmentsPage(){
  	this.navCtrl.push(AppointmentsPage)
  }
  goPrescriptionsPage(){
  	this.navCtrl.push(PrescriptionsPage)
  }
}
