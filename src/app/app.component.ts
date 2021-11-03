import { Component, OnInit } from '@angular/core';
import { Corral } from './interfaces/interfaces';
import { CorralsService } from './services/corrals.service';

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
export class AppComponent implements OnInit
{
  title = 'freedom-frontend';
  // public displayedColumnsCorrals: string[] = [ 'name', 'age', 'dangerousness'];
  // dataSource = ELEMENT_DATA;

  // Data
  public selectedCorral: string = '';
  public dataSourceCorrals: Corral[] = [];
  public displayedColumnsCorrals: string[] = [ 'name', 'age', 'dangerousness'];

  constructor(
    private corralsService: CorralsService
  )
  {

  }

  ngOnInit(): void 
  {
    this.loadData();
  }

  loadData()
  {
    this.corralsService.getAllCorrals().subscribe(
      res => {
        // console.log( res );
        this.dataSourceCorrals = res.corrals;

      }
    );
  }

  changeCorral()
  {
    console.log(this.selectedCorral);
  }
}
