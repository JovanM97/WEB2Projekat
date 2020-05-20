import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  public price: string;
  public duration: any = "60";
  public durationHours: any = Math.floor(this.duration/60);
  public durationMin: any = this.duration % 60;

  ngOnInit(): void {
  }


}
