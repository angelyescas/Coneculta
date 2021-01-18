import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'empleados',
    loadChildren: () => import('./Administracion/empleados/empleados.module').then( m => m.EmpleadosPageModule)
  },
  {
    path: 'empleado/:id',
    loadChildren: () => import('./Administracion/empleado/empleado.module').then( m => m.EmpleadoPageModule)
  },  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'ver-asistencias',
    loadChildren: () => import('./ver-asistencias/ver-asistencias.module').then( m => m.VerAsistenciasPageModule)
  },
  {
    path: 'asistencia-detalle',
    loadChildren: () => import('./asistencia-detalle/asistencia-detalle.module').then( m => m.AsistenciaDetallePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
