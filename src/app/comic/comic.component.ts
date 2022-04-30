import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  allcomics :any = [];
  filterComics :any =[];
  isSearchnull: boolean = false;
  searchByName?: any;
  searchresult : any =[];
  filterresult : any =[];
  constructor(private ser :ServiceService) { }

  findComic(event : any){
    this.searchByName = event.target.value;
    this.ser.getComicsByName(this.searchByName).subscribe(
      resp => {
        if(resp != null){
          this.isSearchnull = true;
          this.searchresult = resp;
          this.filterresult = this.searchresult.data.results;
          
        }
      }
    )

  }

  ngOnInit(): void {
    this.ser.getAllComics().subscribe(
      resp => {
        this.allcomics = resp;
        this.filterComics = this.allcomics.data.results;
        
      }
    )
  }

}
