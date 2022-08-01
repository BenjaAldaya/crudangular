import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';


@Injectable({
  providedIn: 'root'
})


export class CrudService {

  API: string = 'http://localhost/empleados/'

  constructor(private clienteHttp:HttpClient) { }

  agregarEmpleado(datosEmpleado:Empleado):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosEmpleado);
  }

  obtenerEmpleados(){
    return this.clienteHttp.get(this.API);
  }

  eliminarEmpleado(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+id);
  }

  obtenerEmpleado(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }

  editarEmpleado(datosEmpleado:Empleado,id:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosEmpleado);
  }

}
