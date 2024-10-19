import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor( private _httpclint:HttpClient) { }
    getTasks(){
      return this._httpclint.get('https://api.escuelajs.co/api/v1/products')
    }


}
