import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatiService {
  public eventEmitter;
  constructor(
    private httpClient: HttpClient
  ) { 
    this.eventEmitter = new EventEmitter();
  }

  datiRequest(queryStr, callBack){
    let url = 'http://api.91ans.com/s?ques=' + queryStr;
    this.httpClient.get(url).subscribe(responseObj => {
      console.log(responseObj);
      callBack(responseObj);
    })
  }
}
