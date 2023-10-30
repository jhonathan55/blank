import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CrmComponent } from './components/crm/crm.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./page/auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: 'crm',
    component: CrmComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'alert',
        loadChildren: () => import('./page/alert/alert.module').then(m => m.AlertPageModule)
      },

      {
        path: 'action-sheet',
        loadChildren: () => import('./page/action-sheet/action-sheet.module').then(m => m.ActionSheetPageModule)
      },
      {
        path: 'avatar',
        loadChildren: () => import('./page/avatar/avatar.module').then(m => m.AvatarPageModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./page/buttons/buttons.module').then(m => m.ButtonsPageModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./page/product/product.module').then(m => m.ProductPageModule)
      },

    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
