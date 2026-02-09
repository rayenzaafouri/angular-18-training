import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceRoutingModule } from './annonce.routing.module';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import { AnnonceComponent } from './annonce.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AnnonceComponent,AddAnnonceComponent, ListAnnonceComponent],
  imports: [
    CommonModule,
    AnnonceRoutingModule,
    ReactiveFormsModule
  ]
})
export class AnnonceModule { }
