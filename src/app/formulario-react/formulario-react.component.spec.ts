import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReactComponent } from './formulario-react.component';

describe('FormularioReactComponent', () => {
  let component: FormularioReactComponent;
  let fixture: ComponentFixture<FormularioReactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioReactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
