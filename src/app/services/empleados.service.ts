import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmpleadoModel } from '../Models/empleado.model';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private url = 'https://coneculta-dfffa.firebaseio.com';

  constructor(private http: HttpClient) { }

  crearEmpleado( empleado: EmpleadoModel){

    return this.http.post(`${ this.url }/Empleados.json`, empleado)
    .pipe(
      map((resp: any) =>{
        empleado.id = resp.name;
        return empleado;
      })
    );
  }

  actualizarEmpleado( empleado: EmpleadoModel){

    const empleadoTemp = {
      ...empleado
    };
    delete empleadoTemp.id;
    return this.http.put(`${ this.url}/Empleados/${ empleado.id}.json`, empleadoTemp);

  }

  borrarEmpleado( id: string){
    return this.http.delete(`${this.url}/Empleados/${id}.json`);

  }

  getEmpleado( id: string){
    return this.http.get(`${ this.url}/Empleados/${id}.json`);
  }

  getEmpleados(){
    return this.http.get(`${ this.url}/Empleados.json`)
    .pipe(
      map( this.crearAreglo )
    );
  }
   private crearAreglo( empleadosObj: object) {

    const empleados:EmpleadoModel [] = [];
   

    if( empleadosObj === null){return [];}

    Object.keys( empleadosObj).forEach( key => {
      const empleado: EmpleadoModel = empleadosObj[key];
      empleado.id = key;

      empleados.push(empleado);

    });
     return empleados;
   }

   
  
}
