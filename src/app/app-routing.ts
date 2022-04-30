import { Component, ModuleWithProviders } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ComicComponent } from './comic/comic.component';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'comic', component: ComicComponent },
    {path: 'series', component: SeriesComponent },
    {path: 'home', component: HomeComponent },
    {path: '**', component: HomeComponent }
];

export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(routes);