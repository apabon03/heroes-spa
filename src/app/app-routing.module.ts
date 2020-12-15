import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from "./components/home/home.component";

export const routes: Routes =
[
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent}
];

@NgModule
    (
    {
        exports: [RouterModule],
        imports: [RouterModule.forRoot(routes)],
    }
    )
export class AppRoutingModule
{

}
