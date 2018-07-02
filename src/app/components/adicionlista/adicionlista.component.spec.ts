import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionlistaComponent } from './adicionlista.component';

describe('AdicionlistaComponent', () => {
  let component: AdicionlistaComponent;
  let fixture: ComponentFixture<AdicionlistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionlistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
