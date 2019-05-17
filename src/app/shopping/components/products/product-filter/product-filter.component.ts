import { Component, OnInit, Input } from '@angular/core';
import { CategotyService } from 'shared/services/categoty.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$; 
  @Input('category') category;
  
  constructor(categoryService: CategotyService) { 
    this.categories$ = categoryService.getAll();
  }

  ngOnInit() {
  }

}
