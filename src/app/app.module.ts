
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { AddEditTaskComponent } from './add-edit-task/add-edit-task.component';

const appRoutes: Routes = [
    { path: 'ViewTask', component: ViewTaskComponent },
    { path: 'AddEditTask/:id', component: AddEditTaskComponent },
    { path: '', component: ViewTaskComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ViewTaskComponent,
    AddEditTaskComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule, 
      RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
