import { Component, OnDestroy, OnInit } from '@angular/core';
import { faSun, faMoon, faCloud } from '@fortawesome/free-solid-svg-icons';
import { weatherApiservice } from '../WeatherApi.service';

@Component({
  selector: 'app-current-wether',
  templateUrl: './current-wether.component.html',
  styleUrls: ['./current-wether.component.css']
})
export class CurrentWetherComponent implements OnInit, OnDestroy {
  faSun = faSun;
  faMoon = faMoon;
  faCloud = faCloud;
  night:boolean = false;
  weatherdata: any;
  error= null;

  constructor(private weatherApiService : weatherApiservice) { }

  ngOnInit(): void {
    this.weatherApiService.currentWeatherChanged.subscribe(data =>{
     this.setWeatherData(data)
    }) 
   // let data = {"data":[{"wind_cdir":"NE","rh":59,"pod":"d","lon":"-78.63861","pres":1006.6,"timezone":"America\/New_York","ob_time":"2017-08-28 16:45","country_code":"US","clouds":75,"vis":10,"wind_spd":6.17,"wind_cdir_full":"northeast","app_temp":24.25,"state_code":"NC","ts":1503936000,"h_angle":0,"dewpt":15.65,"weather":{  "icon":"c03d", "code": 803,"description":"Broken clouds" },"uv":2,"aqi":45,"station":"CMVN7","wind_dir":50,"elev_angle":63, "datetime":"2017-08-28:17","precip":0,"ghi":444.4,"dni":500,"dhi":120,"solar_rad":350,"city_name":"Raleigh","sunrise":"10:44","sunset":"23:47","temp":24.19,"lat":"35.7721","slp":1022.2 }]};
   // this.setWeatherData(data)
  }
  setWeatherData(data){
    this.weatherdata = data;
    let sunsetTime = new Date(this.weatherdata.data[0].sunset);
    this.weatherdata.data[0].sunset_time = sunsetTime.toLocaleDateString();
    let currentTime =new Date();
    this.weatherdata.data[0].isDay =  (currentTime.getTime()> sunsetTime.getTime());
    this.weatherdata.data[0].temp = (this.weatherdata.data[0].temp).toFixed(0);
    this.weatherdata.data[0].app_temp = (this.weatherdata.data[0].app_temp).toFixed(0);
   
  }
  ngOnDestroy(){
    this.weatherApiService.currentWeatherChanged.unsubscribe();
  }
}
