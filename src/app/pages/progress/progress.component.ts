import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  BluePercentage: number = 50;
  GreenPercentage: number = 50;

  constructor() { }

  ngOnInit() {
  }

  UpdateProgress( event: number )
  {
    this.BluePercentage=event;  
  }
}
