import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {TranslateModule} from '@ngx-translate/core';
import 'hammerjs';

import {FuseModule} from '@fuse/fuse.module';
import {FuseSharedModule} from '@fuse/shared.module';
import {FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule, FuseWidgetModule} from '@fuse/components';

import {fuseConfig} from 'app/fuse-config';

import {AppComponent} from 'app/app.component';
import {LayoutModule} from 'app/layout/layout.module';
import {SampleModule} from 'app/main/sample/sample.module';
import {HomeComponent} from './main/home/home.component';
import {MaterialModule} from './modules/material/material.module';
import {HeaderComponent} from './main/home/components/header/header.component';
import {ProjectStatusComponent} from './main/home/components/project-status/project-status.component';
import {HighlightsComponent} from './main/home/components/highlights/highlights.component';
import {LowlightsComponent} from './main/home/components/lowlights/lowlights.component';
import {TmsComponent} from './main/home/components/tms/tms.component';
import {HelpNeededComponent} from './main/home/components/help-needed/help-needed.component';
import {ManagementItemTableComponent} from './main/home/components/management-item-table/management-item-table.component';
import {AppRoutingModule} from './app-routing.module';
import {ErrorInterceptor} from './iam/_helpers/error.interceptor';
import {JwtInterceptor} from './iam/_helpers/jwt.interceptor';
import {IamModule} from './iam/iam.module';
import {CreateLearnSourcesComponent} from './pages/create-learn-sources/create-learn-sources.component';
import {LearningSourceFormComponent} from './components/learning-source-form/learning-source-form.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        ProjectStatusComponent,
        HighlightsComponent,
        LowlightsComponent,
        TmsComponent,
        HelpNeededComponent,
        ManagementItemTableComponent,
        CreateLearnSourcesComponent,
        LearningSourceFormComponent
    ],
    imports: [
        IamModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MaterialModule,
        FontAwesomeModule,
        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        FuseWidgetModule,
        AppRoutingModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
