import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app-service.service';
import { Cerveja } from 'src/app/app.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cervejas: Cerveja[] = [];
  loading: boolean = true;
  subscription: Subscription | undefined;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.subscription = this.appService.getAllCerveja().subscribe(res => {
      this.loading = false;
      this.cervejas = res;
      this.cervejas.forEach(cerveja=>{
        if(!cerveja.nota)return;
        cerveja.media = this.count(cerveja);
        cerveja.media = this.media(cerveja);
      });
    });
  }

  ngOnDestry() {
    this.subscription?.unsubscribe();
  }

  count(cerveja:Cerveja){
    cerveja.media = cerveja.nota.reduce((acc, cur)=>{
      return acc += cur.avaliacao;
    },0);
    return cerveja.media;
  }

  media(cerveja:Cerveja){
    if(!cerveja.media)return 0;
    return Math.round(cerveja.media/cerveja.nota.length);
  }
}
