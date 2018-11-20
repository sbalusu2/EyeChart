import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InfoPage } from '../pages/myInfo/myInfo';
import { OrdersPage } from '../pages/myOrders/myOrders';
import { AppointmentsPage } from '../pages/myAppointments/myAppointments';
import { PrescriptionsPage } from '../pages/myPrescriptions/myPrescriptions';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoPage,
    OrdersPage,
    AppointmentsPage,
    PrescriptionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfoPage,
    OrdersPage,
    AppointmentsPage,
    PrescriptionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
