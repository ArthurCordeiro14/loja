import { Component } from '@angular/core';
import { Produto } from '../produto';
import { LojaService } from '../loja-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
produtos:Produto[]=[]
constructor(private ls:LojaService,private router:Router) {
  this.ls.obterProdutos().subscribe(res=>{
    this.produtos=res
  })
}

abrirProduto(id:number){
  this.router.navigate(['/busca', id]);
}


}
