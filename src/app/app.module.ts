import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JSONP_PROVIDERS} from '@angular/http';

import {AppComponent} from './app.component';
import {FridgeFindComponent} from './fridge-find/fridge-find.component'

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'fridge_find', component: FridgeFindComponent },
  { path: '', component: AppComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        FridgeFindComponent
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
