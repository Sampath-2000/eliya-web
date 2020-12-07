import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { from } from 'rxjs';
import { SharedRoutingModule } from './shared-routing.module';

import { MaterialModule } from './material.module';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AddCategoryComponent } from '../shared/components/add-category/add-category.component';
import { CategoryIconComponent } from './components/category-icon/category-icon.component';
import { ErrorPageComponent } from './components/micro/error-page/error-page.component';
import { CommonService } from './services/common.service';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';

import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [AddCategoryComponent, CategoryIconComponent, ErrorPageComponent, CategoryCardComponent, ConfirmDeleteComponent  ],
  imports: [CommonModule, MaterialModule, SharedRoutingModule,FormsModule],
exports:[AddCategoryComponent,ErrorPageComponent,CategoryCardComponent],
providers: [
  
  CommonService,
  Location,
  { provide: LocationStrategy, useClass: PathLocationStrategy },
],
 
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
    };
  }
}
