import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildInDepthComponent } from './view-child-in-depth.component';

describe('ViewChildInDepthComponent', () => {
  let component: ViewChildInDepthComponent;
  let fixture: ComponentFixture<ViewChildInDepthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildInDepthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildInDepthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
