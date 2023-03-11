import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ExperPageComponent } from './exper-page/exper-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [ { path: 'home', component: HomePageComponent },
{ path: 'about', component: AboutPageComponent },
{ path: 'exper', component: ExperPageComponent },
{ path: 'contact', component: ContactPageComponent },
{ path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
