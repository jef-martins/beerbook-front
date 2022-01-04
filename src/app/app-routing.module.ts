import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './cerveja/add/create.component';
import { ListComponent } from './cerveja/home/list/list.component';
import { SelectComponent } from './cerveja/select/select.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'}, 
  //{path: '/home', redirectTo:'/home', pathMatch: 'full'}, 
  {path:"home", component: ListComponent},
  {path:"add", component: CreateComponent},
  {path:"select/:id", component: SelectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
