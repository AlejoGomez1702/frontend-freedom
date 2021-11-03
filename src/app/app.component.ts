import { Component, OnInit } from '@angular/core';
import { Animal, Corral } from './interfaces/interfaces';
import { CorralsService } from './services/corrals.service';

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
  public corrals: Corral[] = [];
  public selectedCorral: number = 0;
  public dataSourceAnimals: Animal[] = [];
  public displayedColumnsAnimals: string[] = [ 'name', 'age', 'dangerousness'];

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
        this.corrals = res.corrals;
      }
    );
  }

  loadAnimals()
  {
    const corral = this.corrals.find(corral => corral.id === this.selectedCorral);
    if(corral)
    {
      this.dataSourceAnimals = corral.animals;
    }
    
  }

  changeCorral()
  {
    this.loadAnimals();
    console.log(this.selectedCorral);
  }
}
