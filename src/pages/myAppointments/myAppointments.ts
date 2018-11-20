import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-myAppointments',
  templateUrl: 'myAppointments.html'
})
export class AppointmentsPage {

  constructor(public navCtrl: NavController) {

  }

  goHome(){
  	this.navCtrl.push(HomePage)
  }

}
