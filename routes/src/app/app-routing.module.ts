import { SobreComponent } from './pages/sobre/sobre.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', redirectTo: 'home', pathMatch:'full'
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'404', component: PageErrorComponent
  },
  {
    path:'sobre', component: SobreComponent
  },
  {
    path: 'dashboard', loadChildren: () =>
     import('./pages/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'**', redirectTo: '404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
