import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ModalComponent } from '../modal/modal.component';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  characters : any =[];
  searchresult : any =[];
  comics :any = [];
  series : any =[];
  filterSeries : any = [];
  filtercomic : any =[];
  characterName : any;
  isnull : boolean = false;
  showComics : boolean = false;
  constructor(private ser: ServiceService, public dialog: MatDialog) { }

  getComic(id: string){
    this.ser.getComicbyId(id).subscribe(
      result => {
        if(result != null){
          this.comics = result;
        this.filtercomic = this.comics.data.results;
        this.ser.setData(this.filtercomic);
        this.dialog.open(ModalComponent)
        
        this.showComics = true;
        }
      }
    )
  }

  getSeries(id: string){
    this.ser.getSeriesbyId(id).subscribe(
      result => {
        if(result != null){
          this.series = result;
        this.filterSeries = this.series.data.results;
        this.ser.setData(this.filterSeries);
        this.dialog.open(ModalComponent)
        
        }
      }
    )
  }

  getDetails( details: string){
    
    if(details == null || details == ''){

      details = 'Details Is Not Available For This Moment'
      this.ser.setData(details);
      this.dialog.open(DialogComponent)

    }
    else{
      this.ser.setData(details);
      this.dialog.open(DialogComponent)
    }
  }
  

  findChar(event: any){
    this.characterName = event.target.value;
    this.ser.getCharacterByName(this.characterName).subscribe(
      resp => {
        if(resp.data.count>0){
          this.isnull = true;
          this.searchresult = resp.data.results;
          
        }
        else{
          this.ngOnInit();
        }
      }
    )
  }



  ngOnInit(): void {
    this.isnull = false;
    this.showComics = false;
    this.ser.getAllCharacters().subscribe(
      resp => {
        this.characters = resp.data.results;
        
      }
    )
  }

  

}
