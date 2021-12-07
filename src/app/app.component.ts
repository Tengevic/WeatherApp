import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { weatherApiservice } from './WeatherApi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherApp';
  currentWeather: any ;
  weatherForecast: any;
  isCurrentLoading ;// loading alert
  currentError= null;//  current weather error alert
  forecastError = null;// forecast weather error alert
  ifDataNull= false;// null value alert
  success = false;// success alert



  constructor(private weatherApiService : weatherApiservice){}

  getCurrentWeather(data: NgForm){
    this.ifDataNull= false
    this.success = false
    this.isCurrentLoading = true;

    // current weather api call
    this.weatherApiService.getCurrentWeather(data.value.location).subscribe(data=>{
      this.currentWeather= data;
      this.isCurrentLoading = false;
      if(data === null){
        this.ifDataNull = true;
        this.success = false
      } else{
      this.success =true
      }
    },error=>{
      this.currentError = error;
       
    })

    // forecast weather api call
    this.weatherApiService.getForecastWeather(data.value.location).subscribe(data =>{
      this.weatherForecast = data;
    }, error=>{
      this.forecastError = error;
    })
    data.reset();
  }

}
