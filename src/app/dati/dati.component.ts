import { Component, OnInit } from '@angular/core';
import { DatiService } from '../dati.service';

@Component({
  selector: 'app-dati',
  templateUrl: './dati.component.html',
  styleUrls: ['./dati.component.scss'],
})
export class DatiComponent implements OnInit {
  queryStr;
  responseObj = {ques: '', ans: '', code: 0};
  searchBtnTitle = '搜 索';


  datiArrInitString;
  datiArr;
  constructor(
    private datiService: DatiService
  ) { }

  ngOnInit() {
    this.datiArrInitString = window.localStorage.getItem('datiArr');
    this.datiArr = JSON.parse(this.datiArrInitString || '[]');

    this.datiService.eventEmitter.subscribe(value => {
      if(value == "resetTab1"){
        this.resetBtnClicked();
      }
    });
  }

  searchBtnClicked(){
    console.log(this.queryStr);
    console.log(this.datiService);

    this.searchBtnTitle = "搜索中...";
    this.datiService.datiRequest(this.queryStr, responseOjb => {
      
      this.responseObj = responseOjb;
      this.responseObj.ques = this.responseObj.ques.replace(/\n+/g,"<br/>");
      this.responseObj.ans = this.responseObj.ans.replace(/\n+/g,"<br/>");

      this.responseObj.ques = this.responseObj.ques.replace(/\\u0001/g,"<br/>");
      this.responseObj.ans = this.responseObj.ans.replace(/\\u0001/g,"<br/>");

      this.searchBtnTitle = '搜 索';

      // 将结果保存到本地
      if(responseOjb.code != -1){
        this.datiArr.push(this.responseObj);
        let tmpStr = JSON.stringify(this.datiArr);
        window.localStorage.setItem('datiArr',tmpStr);
      }

      // 更新历史
      this.datiService.eventEmitter.emit("reloadLiShiData");
    });
  }

  resetBtnClicked(){
    setTimeout(() => {
      this.responseObj = {ques: '', ans: '', code: 0};
      this.queryStr = '';
    },500);
  }
}