import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage    
  },
  {
    path: 'painel',
    loadChildren: () => import('./painel/painel.module').then( m => m.PainelPageModule)
  },
  {
    path: 'venda',
    loadChildren: () => import('./venda/venda.module').then( m => m.VendaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
