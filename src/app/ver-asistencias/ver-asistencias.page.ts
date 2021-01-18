import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { EmpleadoModel } from '../Models/empleado.model';
import { EmpleadosService } from '../services/empleados.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-ver-asistencias',
  templateUrl: './ver-asistencias.page.html',
  styleUrls: ['./ver-asistencias.page.scss'],
})
export class VerAsistenciasPage implements OnInit {

  constructor(private menu: MenuController,private alert: ToastService, private router: Router) {} 

  ngOnInit() {
    this.menu.enable(false);
  }

  asistenciaDetalle()
  {
    //this.alert.error("¡Ocurrió un error al realizar la operación!");
    this.router.navigate(['/asistencia-detalle']); //Borrar siempre manda a esta parte aun la contraseña este bien
  }
}
