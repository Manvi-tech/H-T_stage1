import { Component , OnInit} from '@angular/core';
import { IFlat } from './flat';

@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styleUrls: ['./flat-list.component.css']
})
export class FlatListComponent implements OnInit{
 
  ngOnInit(): void {
    this.filteredFlats = this.flats;
  }

  numRooms:number=0;

  filteredFlats: IFlat[]=[];

  flats:IFlat[] = [
    {
      houseId: 101,
      area:"2000 sq",
      noOfRooms: 3,
      swimmingPool: true,
      imageUrl:'house1.jpg'
    },
    {
      houseId: 102,
      area:"200 sq",
      noOfRooms: 1,
      swimmingPool: false,
      imageUrl:'house2.jpg'
    },
    {
      houseId: 103,
      area:"1000 sq",
      noOfRooms: 2,
      swimmingPool: false,
      imageUrl:'house3.jpg'
    }
  ]

  filterFlats():void{
      this.filteredFlats = this.flats.filter((flat:IFlat) => flat.noOfRooms === this.numRooms);
  };
  
}