import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: []
})
export class IncreaserComponent implements OnInit {

  @ViewChild('InputPercentage') InputPercentage: ElementRef; 
  @Input() legend: string='Legend...';
  @Input() percentage: number = 50;

  @Output() percentageChanger: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onValueChange( newValue: number)
  {
    if(newValue<=0) this.percentage=0;

    else if(newValue>=100) this.percentage=100;
    
    else this.percentage=newValue;
    
    this.InputPercentage.nativeElement.value = this.percentage;
    this.percentageChanger.emit(this.percentage);
  }

  SetBarValue(val: number)
  {
    if(this.percentage+val<=100 && this.percentage+val>=0)  
    {
      this.percentage+=val;
      this.percentageChanger.emit(this.percentage);
      this.InputPercentage.nativeElement.focus();
    }
  }

}
