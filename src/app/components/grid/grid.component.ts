import { Component, OnInit } from '@angular/core';
import { employees } from 'src/app/sampleData/employees';
import { process, State } from "@progress/kendo-data-query";
import {
  GroupDescriptor,
  DataResult,
} from "@progress/kendo-data-query";
import {
  GridDataResult,
  DataStateChangeEvent,
} from "@progress/kendo-angular-grid";


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent {


  public groupBy: GroupDescriptor[] = [{ field: "Category.CategoryName" }];

  public state: State = {
    skip: 0,
    take: 5,

    // Initial filter descriptor
    filter: {
      logic: "and",
      filters: [{ field: "ProductName", operator: "contains", value: "" }],
    },
  };
  
  public products: any[] = [
    {
      ProductID: 1,
      ProductName: "Chai",
      UnitPrice: 18,
      Category: {
        CategoryID: 1,
        CategoryName: "Beverages",
      },
    },
    {
      ProductID: 10,
      ProductName: "Chai",
      UnitPrice: 18,
      Category: {
        CategoryID: 1,
        CategoryName: "Beverages",
      },
    },
    {
      ProductID: 2,
      ProductName: "Chang",
      UnitPrice: 19,
      Category: {
        CategoryID: 1,
        CategoryName: "Beverages",
      },
    },
    {
      ProductID: 3,
      ProductName: "Aniseed Syrup",
      UnitPrice: 10,
      Category: {
        CategoryID: 2,
        CategoryName: "Condiments",
      },
    },
    {
      ProductID: 4,
      ProductName: "Apple",
      UnitPrice: 13,
      Category: {
        CategoryID: 3,
        CategoryName: "Food",
      },
    },
    {
      ProductID: 5,
      ProductName: "Cookies",
      UnitPrice: 6,
      Category: {
        CategoryID: 3,
        CategoryName: "Food",
      },
    },
    {
      ProductID: 5,
      ProductName: "Cookies",
      UnitPrice: 6,
      Category: {
        CategoryID: 3,
        CategoryName: "Food",
      },
    },
    {
      ProductID: 5,
      ProductName: "Cookies",
      UnitPrice: 6,
      Category: {
        CategoryID: 3,
        CategoryName: "Food",
      },
    },
    {
      ProductID: 5,
      ProductName: "Cookies",
      UnitPrice: 6,
      Category: {
        CategoryID: 3,
        CategoryName: "Food",
      },
    },
    {
      ProductID: 5,
      ProductName: "Cookies",
      UnitPrice: 6,
      Category: {
        CategoryID: 3,
        CategoryName: "Food",
      },
    },
    {
      ProductID: 5,
      ProductName: "Cookies",
      UnitPrice: 6,
      Category: {
        CategoryID: 3,
        CategoryName: "Food",
      },
    },
    {
      ProductID: 5,
      ProductName: "Cookies",
      UnitPrice: 6,
      Category: {
        CategoryID: 3,
        CategoryName: "Food",
      },
    },
    {
      ProductID: 5,
      ProductName: "Cookies",
      UnitPrice: 6,
      Category: {
        CategoryID: 3,
        CategoryName: "Food",
      },
    },
    {
      ProductID: 5,
      ProductName: "Cookies",
      UnitPrice: 6,
      Category: {
        CategoryID: 3,
        CategoryName: "Food",
      },
    },
    {
      ProductID: 5,
      ProductName: "Cookies",
      UnitPrice: 6,
      Category: {
        CategoryID: 3,
        CategoryName: "Food",
      },
    },
    {
      ProductID: 5,
      ProductName: "Cookies",
      UnitPrice: 6,
      Category: {
        CategoryID: 3,
        CategoryName: "Food",
      },
    },
    {
      ProductID: 5,
      ProductName: "Cookies",
      UnitPrice: 6,
      Category: {
        CategoryID: 3,
        CategoryName: "Food",
      },
    },
    {
      ProductID: 5,
      ProductName: "Cookies",
      UnitPrice: 6,
      Category: {
        CategoryID: 3,
        CategoryName: "Food",
      },
    },
    {
      ProductID: 5,
      ProductName: "Cookies",
      UnitPrice: 6,
      Category: {
        CategoryID: 3,
        CategoryName: "Food",
      },
    },
    {
      ProductID: 5,
      ProductName: "Cookies",
      UnitPrice: 6,
      Category: {
        CategoryID: 3,
        CategoryName: "Food",
      },
    },
    {
      ProductID: 5,
      ProductName: "Cookies",
      UnitPrice: 6,
      Category: {
        CategoryID: 3,
        CategoryName: "Food",
      },
    },
  ];

  // public gridData: GridDataResult = process(this.products, this.state);

  

  // public dataStateChange(state: DataStateChangeEvent): void {
  //   this.state = state;
  //   this.gridData = process(this.products, this.state);
  // }
  
}

