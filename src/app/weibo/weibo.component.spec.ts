import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeiboComponent } from './weibo.component';

describe('WeiboComponent', () => {
  let component: WeiboComponent;
  let fixture: ComponentFixture<WeiboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeiboComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeiboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
