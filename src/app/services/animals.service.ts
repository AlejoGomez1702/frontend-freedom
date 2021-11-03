import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService 
{
  constructor(
    private http: HttpClient
  ) { }


  getAnimalsFromCorral(idCorral: string)
  {
    
  }


}
