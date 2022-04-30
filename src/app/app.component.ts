import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'marvel';
  y?: any;
  x: any = [];

  constructor(private ser: ServiceService){}

  ngOnInit(): void {
    this.ser.getAllCharacters().subscribe(
      resp =>{
        this.x = (resp.data.results);
        
        console.log(this.x)
      }
    )
  }

}
