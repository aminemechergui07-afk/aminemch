import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

private url ='/services/';

  constructor(private http: HttpClient) { }


  create(service: any){
  return this.http.post(this.url + 'create' , service)
  }


  getAllServices(){
  return this.http.get(this.url + 'all')
 }

  getServicesById(id: any){
  return this.http.get(this.url  + id)
  }

getMyServices(id: any){
  return this.http.get(this.url  + 'my/' + id)
}


  deleteServices(id: any){
  return this.http.delete(this.url + id)
  }

}
