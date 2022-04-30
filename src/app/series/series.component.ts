import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private ser: ServiceService) { }

  series: any = [];
  filterAllseries: any = [];
  seriesName: any;
  isSeriesNull: boolean = false;
  seriesResult: any =[];
  filterResult: any = [];

  findSeries(event : any){
    this.seriesName = event.target.value;
    this.ser.getSeriesByName(this.seriesName).subscribe(
      resp => {
        if(resp != null){
          this.isSeriesNull = true;
          this.seriesResult = resp;
          this.filterResult = this.seriesResult.data.results;
         
        }
      }
    )
  }

  ngOnInit(): void {
    this.ser.getAllSeries().subscribe(
      resp => {
        this.series = resp;
        this.filterAllseries = this.series.data.results;

      }
    )
  }

}
