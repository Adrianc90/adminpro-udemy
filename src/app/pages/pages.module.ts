import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { ComponentsModule } from '../components/components.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule(
    {
        declarations: 
        [
            PagesComponent,
            DashboardComponent,
            ProgressComponent,
            Graphics1Component,
            AccountSettingsComponent
        ],
        imports:
        [
            SharedModule,
            PAGES_ROUTES,
            FormsModule,
            ComponentsModule
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