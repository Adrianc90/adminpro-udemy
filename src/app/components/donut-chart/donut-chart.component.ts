import { Component, OnInit, Input } from '@angular/core';
//import { ChartType } from 'chart.js';
//import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styles: []
})
export class DonutChartComponent implements OnInit {

  @Input() public graphic: any=
  {
    'labels': ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
    'data':  [[350, 450, 100]],
    'type': 'doughnut',
    'leyenda': 'El pan se come con'
  }
  
  constructor() { }

  ngOnInit() {
  }

}
