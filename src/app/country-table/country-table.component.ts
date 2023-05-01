import { Component, Inject, AfterContentInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WbApiService } from '../services/wb-api.service';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent implements AfterContentInit {
  countryName: string;
  countryCapital: string;
  countryRegion: string;
  incomeLevel: string;
  lat: string;
  long: string;
  dataArr: any [] = []
  constructor (@Inject(DOCUMENT) private document: Document, private myService: WbApiService) {}

  ngAfterContentInit () {
    let countryElements: any = document.getElementById('countries')?.childNodes;
    
    let countryTable = (name: string, capital: string, region: string, income: string, lat: string, long: string) => {

      // console.log(name, capital, region, income);
      this.countryName = name;
      this.countryCapital = capital;
      this.countryRegion = region;
      this.incomeLevel = income;
      this.lat = lat;
      this.long = long;

      this.dataArr = [];
    }

    let getData = (countryID: string) => {
      this.myService.getData(countryID).subscribe(data => {
        console.log(data);
        this.dataArr.push(data);
        console.log(this.dataArr[0][1][0].name);
        let country = this.dataArr[0][1][0].name;
        let region = this.dataArr[0][1][0].region.value;
        let capital = this.dataArr[0][1][0].capitalCity;
        let iLevel = this.dataArr[0][1][0].incomeLevel.value;
        let lat = this.dataArr[0][1][0].latitude;
        let long = this.dataArr[0][1][0].longitude;
        
        console.log(country, region, capital, iLevel);
        countryTable(country, capital, region, iLevel, lat, long);
  
        // console.log(this.dataArr[1].adminregion.capitalCity);
      });
    }

    // console.log(countryElements[5]);
    let countryCount = countryElements.length;
    for(let i=0; i < countryCount; i++) {
      // 
      countryElements[i].onclick = function() {
        // console.log(countryElements[i].id);
        // console.log(this.getAttribute('data-name'));
        getData(countryElements[i].id);
      }

    }
  }
}
