import {HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RodapeComponent } from './rodape/rodape.component';
import { PagInicialComponent } from './pag-inicial/pag-inicial.component';
import { ConhecaInstComponent } from './conheca-inst/conheca-inst.component';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { ApoieComponent } from './apoie/apoie.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FeedComponent } from './feed/feed.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RodapeComponent,
    PagInicialComponent,
    ConhecaInstComponent,
    MenuInicialComponent,
    MenuUsuarioComponent,
    ApoieComponent,
    CadastrarComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
