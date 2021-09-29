import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService,
              private router: Router,
              private route: ActivatedRoute) { }

              
  @ViewChild('formCliente')formCliente! : NgForm;

  cliente!: Cliente;

  ngOnInit(): void {
  
    let cpf = this.route.snapshot.params['cpf'];
    
  
    const clienteToEdit = this.clienteService.buscarPorId(cpf);

    if ( clienteToEdit !== undefined)
      this.cliente = clienteToEdit;
    else
      throw new Error ("Cliente não encontrado: cpf = " + cpf);
  }

  atualizar(): void{

    const result = this.clienteService.buscarPorId(this.cliente.cpf!);
    
    if ( result !== undefined){
      throw new Error ("CPF já cadastrado = " + this.cliente.cpf);
    } 


    if (this.formCliente.form.valid) {
      this.clienteService.atualizar(this.cliente);
      this.router.navigate( ["/"] );
    }
  }

}
