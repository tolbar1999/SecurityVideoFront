import { URL_API } from './util/_var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VideoService {

  private url: string = URL_API + "/video";

  constructor(private http: HttpClient) {
  }

  generarClave(){
    return this.http.post(this.url+"/generarClave",{},{responseType : "text"});
  }

}
