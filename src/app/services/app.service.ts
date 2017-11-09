import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from "@angular/http";

import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ProjectApp } from '../models/app-model';
import { MappingService } from './mapping.service';
import { BehaviorSubject } from 'rxjs/Rx';


@Injectable()
export class AppService {

  readonly API_URL: string = "http://localhost:3500/api/apps"
  private appsSubject: BehaviorSubject<ProjectApp[]> = new BehaviorSubject([]);
  private apps: any[] = [];

  constructor(private http: Http, private mappingSvc: MappingService) {
    //this.appsSubject.subscribe(_ => this.apps = _); // assigning values to the array

  }
  proj_id: string = '95';
  public newApp: ProjectApp;


  //get all apps in a single project
  public getApps(): Observable<any[]> {
   
    var url = `${this.API_URL}/${this.proj_id}`
    
   return this.http.get(url).map(res => res.json()).catch(err => Observable.throw(err))
    // this.appsSubject.next(this.apps)
    // return this.appsSubject
    // this.http.get(url)
    //   .map(res => res.json())
    //   .catch(err => Observable.throw(err)).subscribe(_=>this.apps.push(_))
    // this.appsSubject.next(this.apps)
    // return this.appsSubject
  }


  // get a single app

  public getSingleApp(application_id): Observable<ProjectApp> {
    var url = `${this.API_URL}/${this.proj_id}/${application_id}`
    return this.http.get(url)
      .map(res => { res.json(), console.log("res", res.json()) })
      .catch(err => Observable.throw(err));
  }


  public updateAppById(application_id: string, data: any): Observable<ProjectApp> {

    var url = `${this.API_URL}/${this.proj_id}/${application_id}`
    // var convertedApp = this.mappingSvc.convertToApp(data)
    // console.log("Edit entry ", convertedApp)

    //replaces entire application
    return this.http.put(url, data)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }
  //Add application 
  public addApp(data: any): Observable<any> {

    var url = `${this.API_URL}/${this.proj_id}`
    return this.http.put(url, data)

      .map(res => { res.json(), console.log("kk", res.json()) })

      .catch(err => Observable.throw(err));

  }
  //delete app by app_id

  public deleteApps(application_id: string): Observable<any> {

    var url = `${this.API_URL}/${this.proj_id}/${application_id}`
    return this.http.delete(url)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }
  // public editTask(data,id):Observable<any> {
  //   console.log("h");
  //   return this.http.put(this.API_URL+"/"+id, data)
  //             .map(res => res.json())
  //             .catch(err => Observable.throw(err));
  // }




}
                //  newApp.







                  // //digitalize_scores:{



                  // // expedite_scores:{



                  // //  monetize_scores :{




                  // // innovation_scores :{







