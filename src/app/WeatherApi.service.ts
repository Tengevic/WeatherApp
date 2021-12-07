import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})
export class weatherApiservice{
   
     apiKey = "0bbbfcf0dcd44eecb9074be96186dbe8";
     apiUrl="https://api.weatherbit.io/v2.0"

    constructor(private http: HttpClient){}


    getCurrentWeather(location: string){
         return this.http.get(""+this.apiUrl+"/current?city="+location+"&key="+this.apiKey+"" )
           
    }
    getForecastWeather(location: string){
        return this.http.get(""+this.apiUrl+"/forecast/daily?city="+location+"&key="+this.apiKey+"" )    
    }
}