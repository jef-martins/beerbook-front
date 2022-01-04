import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app-service.service';
import { Cerveja } from 'src/app/app.model';
import { CERVEJA } from 'src/app/constates';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  subscriptionSelect: Subscription | undefined;
  subscriptionUpdate: Subscription | undefined;
  score:FormControl = new FormControl();

  data = new Date();
  id: any;
  cerveja: Cerveja = CERVEJA;

  constructor(
    private appService: AppService, 
    private route: ActivatedRoute, 
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.select();
  }

  ngOnDestry() {
    this.subscriptionSelect?.unsubscribe();
    this.subscriptionUpdate?.unsubscribe();
  }

  convertFoto(e: any){

  }

  select(){
    this.subscriptionSelect = this.appService.getOneCerveja(this.id).subscribe((res) =>{
      this.cerveja = {
        idCerveja: res.idCerveja,
        foto: res.foto,
        cervejearia: res.cervejearia,
        marca: res.marca,
        estilo: res.estilo,
        copo: res.copo,
        abv: res.abv,
        ibu: res.ibu,
        temperatura: res.temperatura,//? "de "+res.temperatura.replace(",", " a ")+"º" : '',
        harmonizacao: res.harmonizacao,
        espuma: res.espuma,
        coloracao: res.coloracao,
        brilho: res.brilho,
        aroma: res.aroma,
        sabor: res.sabor,
        nota: res.nota,
        createdAt: res.createdAt,
        updatedAt: res.updatedAt,
      }
    });
  }

  alterar(){
    this.subscriptionUpdate = this.appService.updateCerveja(this.id, this.cerveja).subscribe(res=>{
      this._route.navigate(['home']);
    },
    e=>alert('erro ao salvar '+e)
    );
  }

  voltar(){
    this._route.navigate(['home']);
  }

}
