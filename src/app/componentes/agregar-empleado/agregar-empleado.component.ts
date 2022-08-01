import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import  { CrudService } from 'src/app/servicios/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

  formularioEmpleados:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router) { 

    this.formularioEmpleados = this.formulario.group({
      nombre:[''],
      correo:['']
    });
  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.formularioEmpleados.value);
    this.crudService.agregarEmpleado(this.formularioEmpleados.value).subscribe( res =>{
      this.ruteador.navigateByUrl('/listar-empleados');
    });

    
  }

}
