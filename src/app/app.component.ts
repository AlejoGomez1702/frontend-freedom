import { Component } from '@angular/core';

export interface PeriodicElement {
  position: number;
  name: string;  
  age: number;
  dangerousness: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', age: 1.0079, dangerousness: 'H'},
  {position: 2, name: 'Helium', age: 4.0026, dangerousness: 'He'},
  {position: 3, name: 'Lithium', age: 6.941, dangerousness: 'Li'},
  {position: 4, name: 'Beryllium', age: 9.0122, dangerousness: 'Be'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'freedom-frontend';
  displayedColumns: string[] = ['position', 'name', 'age', 'dangerousness'];
  dataSource = ELEMENT_DATA;
}
