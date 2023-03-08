import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesRoutingModule } from './categories-routing.module';


@NgModule({
  declarations: [
    CategoriesFormComponent,
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
