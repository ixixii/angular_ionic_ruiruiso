import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LishiComponent } from './lishi.component';

describe('LishiComponent', () => {
  let component: LishiComponent;
  let fixture: ComponentFixture<LishiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LishiComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LishiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
