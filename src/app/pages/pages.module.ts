import { NgModule } from "@angular/core";

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';


@NgModule(
    {
        declarations: 
        [
            PagesComponent,
            DashboardComponent,
            ProgressComponent,
            Graphics1Component
        ],
        imports:
        [
            SharedModule,
            PAGES_ROUTES
        ],
        exports :
        [
            PagesComponent,
            DashboardComponent,
            ProgressComponent,
            Graphics1Component
        ]
    })

export class PagesModule {}