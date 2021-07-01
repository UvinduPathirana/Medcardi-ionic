import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./components/header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./components/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'call-home',
    loadChildren: () => import('./components/call-home/call-home.module').then( m => m.CallHomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
