
import { Component, OnInit } from '@angular/core';
import { EmpleadoModel } from 'src/app/Models/empleado.model';
import Swal from 'sweetalert2';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.page.html',
  styleUrls: ['./empleados.page.scss'],
})
export class EmpleadosPage implements OnInit {

  empleados: EmpleadoModel[] = [];
  cargando = false;

  constructor(private empleadoService: EmpleadosService) { }

  ngOnInit() {
    this.cargando = true;

    this.empleadoService.getEmpleados()
    .subscribe( resp =>{

      this.empleados = resp;
      this.cargando = false;
    } );
  }

  borrarEmpleado(empleado: EmpleadoModel, i:number){

    Swal.fire({
      title: 'Esta seguro?',
      text: `Esta seguro de elimar al empledo ${empleado.nombre}`,
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true,
    }).then( resp =>{
      if(resp.value){
        this.empleados.splice(i, 1);
        this.empleadoService.borrarEmpleado(empleado.id).subscribe();
      }
    });
  }

}
