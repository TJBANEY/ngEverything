import { Component, OnInit } from '@angular/core';
import {Http, Response, RequestOptions, Headers, Jsonp} from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  five_day_forecast: Array<any> = [];

  constructor(public jsonp: Jsonp, public http: Http){

  }

  ngOnInit(){
  	// Make API call with http request to AccuWeather
  	this.jsonp.request('http://dataservice.accuweather.com/forecasts/v1/daily/5day/72758')
  	.subscribe(
  		(res:Response) => console.log(res),
  		(err) => console.log('ERROR ' + err)
  	)
  }
}
