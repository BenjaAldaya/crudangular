import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {

  Empleados:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.obtenerEmpleados().subscribe( respuesta =>{
      this.Empleados = respuesta;
    });
  }

  borrarEmpleado(id:any,iControl:any){
    // console.log(id,iControl);
    if(window.confirm("Realmente deseas borrar al empleado?")){
      this.crudService.eliminarEmpleado(id).subscribe(res=>{
        this.Empleados.splice(iControl,1);
      })
    }
  }

}
