import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpleadoModel } from '../../Models/empleado.model';
import { EmpleadosService } from '../../services/empleados.service';

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.page.html',
  styleUrls: ['./empleado.page.scss'],
})
export class EmpleadoPage implements OnInit {

  empleado: EmpleadoModel = new EmpleadoModel();
  constructor( private empleadosService: EmpleadosService,
                private route: ActivatedRoute,
                private alertController: AlertController
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if( id !== 'nuevo'){
      this.empleadosService.getEmpleado(id)
      .subscribe( (resp:EmpleadoModel) =>{
        this.empleado = resp;
        this.empleado.id = id;
      });
    }

    console.log(id);
  }

  guardar( form: NgForm){

    if (form.invalid){
      Swal.fire({
        title: '  No valido',
        text: 'Faltan datos',
        icon: 'error'
      })
      console.log('Formulario no valido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando Informacion',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();
    
    let peticion: Observable<any>;

    if(this.empleado.id){
      peticion=this.empleadosService.actualizarEmpleado( this.empleado);

    } else{
      peticion=this.empleadosService.crearEmpleado( this.empleado);
    }

    peticion.subscribe( resp => {
     Swal.fire({
        title: this.empleado.nombre,
        text: 'Se actualizo Correctamente',
        icon: 'success'
     });
    });
   
  }

}
