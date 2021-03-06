import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { EmpleadosService } from './services/empleados.service';
import { EmpleadoModel } from './Models/empleado.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  currentUser: EmpleadoModel;
  public appPages = [
    {
      title: 'Asistencia',
      url: '/folder/Asistencia',
      svg: '../assets/icon/asistencia.svg'
    },
    {
      title: 'Empleados',
      url: '/empleados',
      svg: '../assets/icon/asistencia.svg'
    }
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private employeeService: EmpleadosService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    this.employeeService.employee.subscribe(res => {
      this.currentUser = res;
    });
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  exit() {
    this.employeeService.saveLocal();
    this.router.navigate(['/login']);
  }
}
