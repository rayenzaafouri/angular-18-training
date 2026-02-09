import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './annonce.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';



const t : Routes = [
  {path: '', component:AnnonceComponent,children:[
    {path:"list", component:ListAnnonceComponent },
    {path:"add",component:AddAnnonceComponent},
  ]}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(t)
  ],
  exports : [RouterModule]
})
export class AnnonceRoutingModule { }
