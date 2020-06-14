import { Component, OnInit } from '@angular/core';
import { DatiService } from '../dati.service'

@Component({
  selector: 'app-lishi',
  templateUrl: './lishi.component.html',
  styleUrls: ['./lishi.component.scss'],
})
export class LishiComponent implements OnInit {
  datiArrInitString;
  datiArr;
  colorArr;
  constructor(
    private datiService: DatiService
  ) { 
    this.colorArr = [ "dark","warning",  "medium", "tertiary","light",  "danger",  "success","secondary", "primary"];
    // window.localStorage.removeItem("datiArr");
  }

  ngOnInit() {
    this.reloadData();

    this.datiService.eventEmitter.subscribe(value => {
      if(value == "reloadLiShiData") {
        console.log("准备重载数据...");
        this.reloadData();
      }
    });
  }

  reloadData(){
    this.datiArrInitString = window.localStorage.getItem("datiArr");
    this.datiArr = JSON.parse(this.datiArrInitString) || [];
  }

  deleteDatiFunc(i){
    let newArr = [];
    for(let j = 0; j < this.datiArr.length; j++){
      if(j != i){
        newArr.push(this.datiArr[j]);
      }
    }
    this.datiArr = [];
    this.datiArr = newArr;
    // delete this.datiArr[i];
    // this.datiArr.
    this.saveData();
  }

  saveData(){
    let tmpStr = JSON.stringify(this.datiArr);
    window.localStorage.setItem('datiArr',tmpStr);
  }

}
