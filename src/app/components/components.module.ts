import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { IncreaserComponent } from './increaser/increaser.component';

@NgModule(
    {
       declarations:
       [
        IncreaserComponent
       ],
       imports: 
       [
        FormsModule
       ],
       exports: 
       [
         IncreaserComponent
       ] 
    })

export class ComponentsModule {}