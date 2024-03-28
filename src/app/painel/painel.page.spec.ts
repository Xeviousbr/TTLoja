import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PainelPage } from './painel.page';

describe('PainelPage', () => {
  let component: PainelPage;
  let fixture: ComponentFixture<PainelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PainelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
