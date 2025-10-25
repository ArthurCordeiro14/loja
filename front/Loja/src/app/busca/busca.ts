import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Produto } from '../produto';
import { LojaService } from '../loja-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './busca.html',
  styleUrl: './busca.css',
})
export class Busca {
  private fb = inject(FormBuilder);
  private lojaService = inject(LojaService);

  formBusca = this.fb.group({
    id: [Validators.required]
  });

  produto = signal<Produto | null>(null);

  constructor(private route: ActivatedRoute) {
  this.formBusca = this.fb.group({
  id: ['']
} as any);

  effect(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
   if (id){ this.buscarProduto()};

  });
}

  buscarProduto() {
    if (this.formBusca.valid) {
      const id = this.formBusca.value.id!;
      
      this.lojaService.obterProdutoPorId(id).subscribe(
        (res) => {
          this.produto.set(res);
        
      });
    }
  }

}