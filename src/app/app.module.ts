import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
// import { MaterialModule } from '@angular/material';
import { MaterialModule } from './modules/material/material.module';
import { MatSnackBarComponent } from './components/mat-snack-bar/mat-snack-bar.component';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
// import { ChartsModule } from 'ng2-charts';
import { ProjectMainComponent } from './components/it/project-main/project-main.component';
import { InputModalComponent } from './components/IT/input-modal/input-modal.component';
// import { MatSnackBarComponent } from './components/mat-snack-bar/mat-snack-bar.component';
import { ProjectAdminComponent } from './components/admin/project-admin/project-admin.component';
import { UserComponent } from './components/admin/user/user.component';
// import { RoutesModule } from './modules/routes/routes.module';
import { ViewProjectComponent } from './components/admin/view-project/view-project.component';
import { EditProjectComponent } from './components/admin/edit-project/edit-project.component';
import { ViewUserComponent } from './components/admin/view-user/view-user.component';
import { RolesComponent } from './components/admin/roles/roles.component';
import { EditUserComponent } from './components/admin/edit-user/edit-user.component';
import { SidenavComponent } from './components/admin/sidenav/sidenav.component';
import { LoginComponent } from './components/login/login.component';
import { MainDashComponent } from './components/dashboard/main-dash/main-dash.component';

import { ChartsModule as ng2Charts } from 'ng2-charts';
//import for highcharts
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

export declare var require: any

import { CompletionTileComponent } from './components/dashboard/completion-tile/completion-tile.component';
import { BusinessCriticalityComponent } from './components/dashboard/business-criticality/business-criticality.component';
import { CountryBubbleComponent } from './components/dashboard/country-bubble/country-bubble.component';
import { UiBarChartComponent } from './components/dashboard/ui-bar-chart/ui-bar-chart.component';
import { ScoreGaugeComponent } from './components/dashboard/score-gauge/score-gauge.component';
import { ScoreCompletionComponent } from './components/dashboard/score-completion/score-completion.component';
import { MainReportComponent } from './components/reports/main-report/main-report.component';

import { TreemapComponent } from './components/reports/treemap/treemap.component';
import { ProgressBarComponent } from './components/reports/progress-bar/progress-bar.component';
// import { ScoreSpeedometerComponent } from './components/score-speedometer/score-speedometer.component';
import { UsersTableComponent } from './components/reports/users-table/users-table.component';
import { TrialRatingComponent } from './components/it/trial-rating/trial-rating.component';
import { QuestionService } from './components/it/project-main/question.service';
import { DynamicFormComponent } from './components/it/project-main/dynamic/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/it/project-main/dynamic/dynamic-form-question/dynamic-form-question.component';
import { QuestionControlService } from './components/it/project-main/question-control.service';
//import { RatingModule } from 'ng2-rating';
import { Exel4Component } from './components/exel4/exel4.component';
import { ExcelComponent } from './components/excel/excel.component';
import { UserService } from './services/user-service';
import { HttpModule } from '@angular/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { LocalStorageService } from 'ng2-webstorage';
import { AddAttributeComponent } from './components/admin/add-attribute/add-attribute.component';
import { DataService } from './services/data.service';
import { UserResolverService } from './services/user-resolver.service';
import { ProjectResolverService } from './services/project-resolver.service';
import { ProjectService } from './services/project-service';
import { FrontComponent } from './components/projectdashboard/front/front.component';
import { AppService } from './services/app.service';
import { MappingService } from './services/mapping.service';
import { AppResolverService } from './services/app-resolver.service';
const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: SidenavComponent,
    children:
    [
      // {
      //   path:'maindash', component: FrontComponent
      // },
      { path: 'firstdash', component: MainDashComponent },
      {
        path: 'inputforms',
        component: ProjectMainComponent
      },
      {
        path: 'add-attribute/:id',
        component: AddAttributeComponent,
        resolve: {
          project: ProjectResolverService
        }
      },
      {
        path: 'reports',
        component: MainReportComponent
      },
      {
        path: 'role',
        component: RolesComponent
      },
      {
        path: 'view-user',
        component: ViewUserComponent,
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'view',
        component: ViewProjectComponent
      },
      {
        path: 'edit-project/:id',
        component: EditProjectComponent,
        resolve: {
          project: ProjectResolverService
        }
      }, {
        path: 'user-edit/:id',
        component: EditUserComponent,
        resolve: {
          user: UserResolverService
        }
      },
      {
        path: 'temp',
        component: TrialRatingComponent
      },
      {
        path: 'new-project',
        component: ProjectAdminComponent
      },
      {
        path: 'exel',
        component:Exel4Component,
        resolve:{
          appResolve:AppResolverService
        },
      }
    ]
  },

]

export function highchartsFactory() {

  const hc = require('highcharts/highstock');
  const dd = require('highcharts/modules/exporting');
  const a = require('highcharts/highcharts-3d');
  const b = require('highcharts/highcharts-more');
  const c = require('highcharts/modules/wordcloud');
  const d = require('highcharts/modules/data');
  const e = require('highcharts/modules/drilldown');
  const f = require('highcharts/modules/funnel');
  const g = require('highcharts/modules/solid-gauge');
  const h = require('highcharts/modules/treemap');
  const i = require('highcharts/modules/heatmap');

  dd(hc);
  a(hc)
  b(hc)
  c(hc)
  d(hc)
  e(hc)
  f(hc)
  h(hc)
  g(hc)
  i(hc)

  return hc;
}

@NgModule({
  declarations: [
    AppComponent,

    MatSnackBarComponent,
    ProjectMainComponent,
    InputModalComponent,
    ProjectAdminComponent,
    UserComponent,
    ViewProjectComponent,
    EditProjectComponent,
    ViewUserComponent,
    RolesComponent,
    EditUserComponent,
    SidenavComponent,
    LoginComponent,
    MainDashComponent,
    CompletionTileComponent,
    BusinessCriticalityComponent,
    CountryBubbleComponent,
    UiBarChartComponent,
    ScoreGaugeComponent,
    ScoreCompletionComponent,
    MainReportComponent,
    TreemapComponent,
    ProgressBarComponent,
    TrialRatingComponent,
    // ScoreSpeedometerComponent,
    UsersTableComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    // MatSnackBarComponent 
    Exel4Component,
    ExcelComponent,
    AddAttributeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ng2Charts,
    ChartModule,
    HttpModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forRoot(),
    Ng2SmartTableModule
    // .forRoot(require('highcharts'),
    // require('highcharts/highcharts-3d'),
    // require('highcharts/highcharts-more'),
    // require('highcharts/modules/wordcloud'),
    // require('highcharts/modules/data'),
    // require('highcharts/modules/drilldown'),
    // require('highcharts/modules/funnel'),
    // require('highcharts/modules/solid-gauge'),
    // require('highcharts/modules/treemap'),
    // require('highcharts/modules/heatmap'))
  ],
  providers: [
    QuestionService,
    QuestionControlService,
    UserService, LocalStorageService,
    DataService,
    ProjectService,
    UserResolverService,
    ProjectResolverService,
    AppService,
    MappingService,
    AppResolverService,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
