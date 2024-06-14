import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoNoticiasComponent } from './estado-noticias.component';

describe('EstadoNoticiasComponent', () => {
  let component: EstadoNoticiasComponent;
  let fixture: ComponentFixture<EstadoNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstadoNoticiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstadoNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
