import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditCategoryComponent } from 'src/app/category/edit-category/edit-category.component';
import { NotificationService } from '../../services/general/notification.service';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { FormsModule } from '@angular/forms';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { CommonService } from '../../services/common.service';
import { Category } from 'src/app/category/models/category-dto';
@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Output() isDelete = new EventEmitter<boolean>();
  categoryList:Category = new Category();
  
  @Input()
  category: {
    name: any;
    icon: any;
    isActive: boolean;
  } | any;
  constructor(public dialog: MatDialog,  private notficationService: NotificationService,
    private commonService:CommonService) { }

  ngOnInit(): void {
  }
  openEditCategory(category:any) {
    var name = category.name;
    var icon = category.icon;
    var id=category._id;
    this.commonService.getUpdateCategory(name,icon,id);
  }
  deleteCategory(category: any) {
    
    const dialogRef = this.dialog.open(ConfirmDeleteComponent,{
      width:'400px',
      data:{category}
    });

}
}