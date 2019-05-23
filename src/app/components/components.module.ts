import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { IncreaserComponent } from './increaser/increaser.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule(
    {
       declarations:
       [
        IncreaserComponent,
        DonutChartComponent
       ],
       imports: 
       [
        FormsModule,
        ChartsModule
       ],
       exports: 
       [
         IncreaserComponent,
         DonutChartComponent
       ] 
    })

export class ComponentsModule {}