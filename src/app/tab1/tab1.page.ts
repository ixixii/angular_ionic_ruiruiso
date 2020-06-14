import { Component } from '@angular/core';
import { DatiService } from '../dati.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private datiService: DatiService
  ) {}

  resetBtnClicked(){
    this.datiService.eventEmitter.emit("resetTab1");
  }

}
