import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndorsedByComponent } from './endorsed-by.component';

describe('EndorsedByComponent', () => {
  let component: EndorsedByComponent;
  let fixture: ComponentFixture<EndorsedByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EndorsedByComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndorsedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
