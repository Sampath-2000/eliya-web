import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { CategoryListComponent } from './category-list/category-list.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CommonService } from '../shared/services/common.service';
import { CategoryService } from './services/category.service';




@NgModule({
  declarations: [ CategoryListComponent, EditCategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    
  ],
  providers:[CategoryService]
})  
export class CategoryModule { }
