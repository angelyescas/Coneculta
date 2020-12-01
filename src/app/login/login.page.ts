import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpleadoModel } from '../Models/empleado.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  empleado: EmpleadoModel = new EmpleadoModel();
  constructor() { }

  ngOnInit() {
  }

  login(form: NgForm){

    if(form.invalid){return}

    console.log(this.empleado);
      console.log(form);
  }

}
