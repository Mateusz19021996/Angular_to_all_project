import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonGroupComponent } from '@progress/kendo-angular-buttons';
import { AngularTrainingComponent } from './components/angular-training/angular-training.component';
import { GridComponent } from './components/grid/grid.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { KendoTrainingComponent } from './components/kendo-training/kendo-training.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ToDoComponent } from './components/to-do/to-do.component';

const routes: Routes = [
  {path: '', component: HomeComponentComponent},
  {path: 'angular-training', component: AngularTrainingComponent},
  {path: 'kendoToDo', component: ToDoComponent},
  {path: 'kendo', component: KendoTrainingComponent},
  {path: 'observ', component: PipesComponent},
  {path: 'grid', component: GridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
