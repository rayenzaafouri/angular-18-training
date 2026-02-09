import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddSuggestionComponent } from './add-suggestion/add-suggestion.component';


/*
router has two 
  - for root 
  - for child
*/
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "suggestion/list", component: ListSuggestionComponent },
  { path: "suggestion/add", component: AddSuggestionComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
