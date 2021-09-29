import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';

import { InserirClienteComponent } from './cliente/inserir-cliente/inserir-cliente.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { PedidoComponent } from './pedido/listar-pedido/pedido.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'clientes/listar',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    redirectTo: 'clientes/listar'
  },
  {
    path: 'clientes/listar',
    component: ListarClienteComponent
  },
  {
    path: 'clientes/pedido',
    component: PedidoComponent
  },
  {
    path: 'clientes/novo',
    component: InserirClienteComponent
  },
  {
    path: 'clientes/editar/:cpf',
    component: EditarClienteComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
