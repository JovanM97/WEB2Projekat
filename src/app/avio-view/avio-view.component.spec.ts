import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvioViewComponent } from './avio-view.component';

describe('AvioViewComponent', () => {
  let component: AvioViewComponent;
  let fixture: ComponentFixture<AvioViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvioViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvioViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
