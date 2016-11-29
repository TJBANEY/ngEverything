import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JSONP_PROVIDERS} from '@angular/http';

import {AppComponent} from './app.component';
import {FridgeFindComponent} from './fridge-find/fridge-find.component'
import {WeatherComponent} from './weather/weather.component'

import {RouterModule, Routes} from '@angular/router';

const appRoutes:Routes = [
    {path: 'fridge-find', component: FridgeFindComponent},
    {path: 'weather', component: WeatherComponent},
    {path: '', component: AppComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        FridgeFindComponent,
        WeatherComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        JSONP_PROVIDERS
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
