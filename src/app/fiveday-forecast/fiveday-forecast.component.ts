import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { faCloud, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-fiveday-forecast',
  templateUrl: './fiveday-forecast.component.html',
  styleUrls: ['./fiveday-forecast.component.css']
})
export class FivedayForecastComponent implements OnInit {
  
  faSun = faSun;
  faMoon = faMoon;
  faCloud = faCloud;// icons from font awesome
  night: boolean =true ;//switch between day and night
  @Input() weatherdata: any;// input from app component
 

  ngOnInit(): void {

    
    for (let index = 0; index < this.weatherdata.data.length; index++) {
      // compares sunset time and current time
      let sunsetTime = new Date(this.weatherdata.data[index].sunset_ts * 1000);
      this.weatherdata.data[index].sunset_time = sunsetTime.toLocaleDateString();
      let currentTime =new Date();
      this.weatherdata.data[index].isDay =  (currentTime.getTime()< sunsetTime.getTime());

     // gets day of the week from the date
      switch (new Date(this.weatherdata.data[index].valid_date).getDay()) {
        case 0:
          this.weatherdata.data[index].day = "Sunday";
          break;
        case 1:
          this.weatherdata.data[index].day = "Monday";
          break;
        case 2:
          this.weatherdata.data[index].day = "Tuesday";
          break;
        case 3:
          this.weatherdata.data[index].day = "Wednesday";
          break;
        case 4:
          this.weatherdata.data[index].day = "Thursday";
          break;
        case 5:
          this.weatherdata.data[index].day = "Friday";
          break;
        case 6:
          this.weatherdata.data[index].day = "Saturday";
      }
      this.night=this.weatherdata.data[index].isDay
    }
    

  }
  
}
