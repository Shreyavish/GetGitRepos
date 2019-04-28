import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMyListComponent } from './get-my-list.component';

describe('GetMyListComponent', () => {
  let component: GetMyListComponent;
  let fixture: ComponentFixture<GetMyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
