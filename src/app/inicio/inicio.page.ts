import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { EmpleadoModel } from '../Models/empleado.model';
import { EmpleadosService } from '../services/empleados.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private menu: MenuController,private alert: ToastService, private router: Router) {} 

  ngOnInit() {
    this.menu.enable(false);
  }

  inicio()
  {
    //this.alert.error("¡Ocurrió un error al realizar la operación!");
    this.router.navigate(['/ver-asistencias']); //Borrar siempre manda a esta parte aun la contraseña este bien
  }

}
