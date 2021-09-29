
export class Cliente {
    static _id: number = 0;
    public id: number;  

    constructor(public cpf: string, public nome?: string, public sobrenome?: string, public pedido?: string )
    { 
        this.id = Cliente._id++
    }

    
}

export class Pedido{
    id_cliente!: Cliente;    

    constructor(public cliente: Cliente, public produto: Produto, public quantidade: number){
        this.id_cliente = cliente;
        this.produto = produto;
        this.quantidade = quantidade;

    }

}

export class Produto{

    constructor(public id_produto: number, public description: string){
        this.id_produto = id_produto;
        this.description = description;
    }
}

export class itemDoPedido{
    
    constructor(public pedido: Pedido, public produto: Produto, public quantidade: number){
        this.pedido = pedido;
        this.produto = produto;
        this.quantidade = quantidade;
    }

}