import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  percentage: number = 50;

  constructor() { }

  ngOnInit() {
  }

  SetBarValue(val: number)
  {
    if(this.percentage+val<=100 && this.percentage+val>=0)  this.percentage+=val;
  }
}
