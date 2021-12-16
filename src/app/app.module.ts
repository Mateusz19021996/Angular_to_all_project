import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ButtonControlPanelComponent } from './components/button-control-panel/button-control-panel.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { HeaderComponent } from './components/header/header.component';
import { AngularTrainingComponent } from './components/angular-training/angular-training.component';
import { AngularChildComponent } from './components/angular-child/angular-child.component';
import { FormsModule } from '@angular/forms';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { KendoTrainingComponent } from './components/kendo-training/kendo-training.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { GridComponent } from './components/grid/grid.component';
import { GridModule } from '@progress/kendo-angular-grid';




export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    ButtonControlPanelComponent,
    ToDoComponent,
    HeaderComponent,
    AngularTrainingComponent,
    AngularChildComponent,
    HomeComponentComponent,
    KendoTrainingComponent,
    PipesComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropDownsModule,
    BrowserAnimationsModule,
    GridModule,
    ButtonsModule,
    InputsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en-ENG',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
