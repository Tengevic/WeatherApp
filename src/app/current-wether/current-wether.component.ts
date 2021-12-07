import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { faSun, faMoon, faCloud } from '@fortawesome/free-solid-svg-icons';
import { weatherApiservice } from '../WeatherApi.service';

@Component({
  selector: 'app-current-wether',
  templateUrl: './current-wether.component.html',
  styleUrls: ['./current-wether.component.css']
})
export class CurrentWetherComponent implements OnInit {
  faSun = faSun;
  faMoon = faMoon;
  faCloud = faCloud;// incons from font awesome
  night:boolean = false;// switch between moon icon and sun icon
  @Input() weatherdata: any;// input from app component

  ngOnInit(): void {
    // compare current time and sunset time
    const sunsetTime = new Date(this.weatherdata.data[0].sunset);//
    this.weatherdata.data[0].sunset_time = sunsetTime.toLocaleDateString();
    const currentTime =new Date();
    this.weatherdata.data[0].isDay =  (currentTime.getTime()> sunsetTime.getTime());

    // converts values from decimals to integers
    this.weatherdata.data[0].temp = (this.weatherdata.data[0].temp).toFixed(0);
    this.weatherdata.data[0].app_temp = (this.weatherdata.data[0].app_temp).toFixed(0);
   
  }
}
