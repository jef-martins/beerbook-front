import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './cerveja/home/home/home.component';
import { HeaderComponent } from './cerveja/home/header/header.component';
import { BodyComponent } from './cerveja/home/body/body.component';
import { ListComponent } from './cerveja/home/list/list.component';
import { CreateComponent } from './cerveja/add/create.component';
import { SelectComponent } from './cerveja/select/select.component';
import { LoadingComponent } from './loading/loading.component';
import { NbButtonModule, NbCardModule, NbLayoutModule, NbSpinnerModule, NbStepperModule, NbThemeModule } from '@nebular/theme';

import {RatingModule} from 'primeng/rating';
import {SliderModule} from 'primeng/slider';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import { NotaComponent } from './nota/nota.component';
import {ImageModule} from 'primeng/image';
import {KnobModule} from 'primeng/knob';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    ListComponent,
    CreateComponent,
    SelectComponent,
    LoadingComponent,
    NotaComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NbLayoutModule,
    NbButtonModule,
    AppRoutingModule,
    HttpClientModule,
    NbStepperModule,
    NbThemeModule.forRoot(),
    FormsModule,
    NbCardModule,
    RatingModule,
    NbSpinnerModule,
    ProgressSpinnerModule,
    InputTextareaModule,
    SliderModule,
    DataViewModule,
    ButtonModule,
    ImageModule,
    KnobModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
