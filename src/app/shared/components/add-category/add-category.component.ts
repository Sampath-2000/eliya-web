import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/general/notification.service';
import { CategoryIconComponent } from '../category-icon/category-icon.component';
import { MatDialog } from '@angular/material/dialog';
import { isDefined } from '@angular/compiler/src/util';
import { HttpStatusCode } from 'src/app/constents/http-status-code';

import { CommonService } from 'src/app/shared/services/common.service';
import { result } from 'lodash';
import { BindingFlags } from '@angular/compiler/src/core';
import { CategoryService } from 'src/app/category/services/category.service';
import { Category } from 'src/app/category/models/category-dto';
import { Login } from 'src/app/login/models/login-dto';
import { CategoryModule } from 'src/app/category/category.module';
import { title } from 'process';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  title='';
  button='SAVE';

  @Output() isAdd = new EventEmitter<boolean>();
 @Input() categoryList: Category = new Category();
  constructor(
    private categoryService: CategoryService,
    private notificationService: NotificationService,
    private router: Router,
    public dialog: MatDialog,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.commonService.title;
  }



  public addCategory(category: { name: any; icon: any; }) {
    var name = category.name;
    var icon = category.icon;
    
 
      this.categoryService.addCategory(category).subscribe((result: any) => {
        if (result.status === HttpStatusCode.Created) {

          this.notificationService.showSuccessMessage(
            'Category created successfully'
          );
          this.isAdd.emit(true);
          console.log(this.commonService.getUpdateCategory.arguments);
        
        }
      });

    }
  

  


  selectIcon() {
    const dialogRef = this.dialog.open(CategoryIconComponent, {
      width: '50%',
      data: {},
    });
    dialogRef.afterClosed().subscribe((icon: any) => {
      if (icon) {
        this.categoryList.icon = icon;
      }
    });
  }
}
