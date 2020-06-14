import { Component } from '@angular/core';
import { DatiService } from '../dati.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private datiService: DatiService
  ) {}
  refreshBtnClicked(){
    console.log("重载数据");
    this.datiService.eventEmitter.emit("reloadLiShiData");
  }
}
