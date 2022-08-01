import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicios/crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  idEmpleado:any;
  formularioEmpleado:FormGroup;
  Empleado:any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private ruteador:Router,
    private crudService:CrudService,
    private formulario:FormBuilder


  ) { 
    this.idEmpleado=this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.obtenerEmpleado(this.idEmpleado).subscribe(res=>{
      console.log(res);
      this.formularioEmpleado.setValue({
        nombre:res[0]['nombre'],
        correo:res[0]['correo']
      })
    })

    this.formularioEmpleado=this.formulario.group({
      nombre:[''],
      correo:['']
    })
  }

  ngOnInit(): void {
  }

  enviarDatos(){
    
    this.crudService.editarEmpleado(this.formularioEmpleado.value, this.idEmpleado).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-empleados');
    });
  }

}
