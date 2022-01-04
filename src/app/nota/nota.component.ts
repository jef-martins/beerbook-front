import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from '../app-service.service';
import { Cerveja, Nota } from '../app.model';
import { CERVEJA } from '../constates';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  nota: Nota = {
    avaliacao: 5,
    nota_pessoal: ''
  }

  @Input() cerveja: Cerveja = CERVEJA;
  id: string | null = '';
  subscriptionUpdate: Subscription | undefined;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  save(){
    const id: number = this.id ? +this.id : 0;
    this.nota.idNota = new Date().getTime();
    this.cerveja.nota.push(this.nota);
    this.subscriptionUpdate = this.appService.updateCerveja(id, this.cerveja).subscribe(res=>{
      location.reload();
    },
    e=>alert('erro ao salvar '+e)
    );
  }

}
