import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app-service.service';
import { Cerveja, Nota } from 'src/app/app.model';
import { CERVEJA } from 'src/app/constates';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  subscription: Subscription | undefined;

  cerveja: Cerveja = CERVEJA;

  nota: Nota = {
    avaliacao: 5,
    nota_pessoal: '',
  }

  aromas: string[] = [];
  sabores: string[] = [];


  constructor(private appService: AppService, private _route: Router) { }

    ngOnInit() {

    }

    ngOnDestry() {
      this.subscription?.unsubscribe();
    }

  convertBase64(fileParam: File) {
    var file = new Blob([fileParam], { type: 'image/jpeg' });

    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  async convertFoto(e: any) {
    this.cerveja.foto = await this.convertBase64(e.target.files[0]);
  }

  save(){
    let save: boolean = true;
    this.cerveja.aroma = this.aromas.join();
    this.cerveja.sabor = this.sabores.join();
    this.nota.idNota = new Date().getTime();
    this.cerveja.nota.push(this.nota);
    this.saveCerveja(save);
  }

  saveCerveja(save: boolean){
    if(save)
      this.subscription = this.appService.createCerveja(this.cerveja).subscribe((res) =>{
        this._route.navigate(['home']);
      });
    else
      alert("Erro ao salvar");
  }

  setAroma(e: any){
    if(this.aromas.find(el=>el == e.target.value) == undefined)
      this.aromas.push(e.target.value)
    else{
      const i = this.aromas.findIndex(el=> el == this.aromas.find(el=>el == e.target.value));
      this.aromas.splice(i, 1);
    }
  }

  setSabor(e: any){
    if(this.sabores.find(el=>el == e.target.value) == undefined)
      this.sabores.push(e.target.value)
    else{
      const i = this.sabores.findIndex(el=> el == this.sabores.find(el=>el == e.target.value));
      this.sabores.splice(i, 1);
    }
  }

}
