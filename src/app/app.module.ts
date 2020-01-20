import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentReactiveComponent } from './assignment-reactive/assignment-reactive.component';
import { AssignmentTemplateComponent } from './assignment-template/assignment-template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';



@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    AssignmentTemplateComponent,
    ReactiveComponent,
    AssignmentReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
