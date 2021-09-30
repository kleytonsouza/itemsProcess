import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoComponent } from './listar-pedido/pedido.component';
import { Pedido } from '../shared';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente/services/cliente.service';
import { InserirPedidoComponent } from './inserir-pedido/inserir-pedido.component';
import { EditarPedidoComponent } from './editar-pedido/editar-pedido.component';
import { NumericoDirective } from '../cliente/directives';



const LS_CHAVE: string = "pedidos";

@NgModule({
  declarations: [
    PedidoComponent,
    InserirPedidoComponent,
    EditarPedidoComponent,
    NumericoDirective
  ],
  imports: [
    CommonModule
  ]
})

export class PedidoModule {


  constructor(private route: ActivatedRoute, private clienteService: ClienteService){}

  ngOnInit(): void {
  
    let cpf = this.route.snapshot.params['cpf'];
  
    const clienteOrdens = this.clienteService.buscarPorId(cpf);

    if ( clienteOrdens !== undefined)
      this.listarTodos();
    else
      throw new Error ("Cliente não encontrado: cpf = " + cpf);
  }

  listarTodos(): Pedido[]{
    const pedidos = localStorage[LS_CHAVE];
    return pedidos ? JSON.parse(pedidos) : [];
  }

  inserir(pedido: Pedido): void{

      const pedidos = this.listarTodos();
      
      pedidos.push(pedido);
      
      localStorage[LS_CHAVE] = JSON.stringify(pedidos);
  

  }


 }
