import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettersAndSettersComponent } from './getters-and-setters.component';

describe('GettersAndSettersComponent', () => {
  let component: GettersAndSettersComponent;
  let fixture: ComponentFixture<GettersAndSettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettersAndSettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettersAndSettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
