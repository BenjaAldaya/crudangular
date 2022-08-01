import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent  } from './componentes/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';

const routes: Routes = [
  {path: '',pathMatch:'full',redirectTo:'listar-empleado'},
  {path: 'listar-empleados',component:ListarEmpleadoComponent},
  {path:'editar-empleado/:id', component:EditarEmpleadoComponent},
  {path:'agregar-empleado', component:AgregarEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
