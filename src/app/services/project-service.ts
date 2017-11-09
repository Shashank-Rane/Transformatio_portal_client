import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { project } from '../models/project';

@Injectable()
export class ProjectService {

  readonly API_URL: string = "http://localhost:3500/transform"
  constructor(private http: Http) { }

  public deleteProject(id): Observable<any> {
    var projects = "projects";
    var x = `${this.API_URL}/${projects}/${id}`
    return this.http.delete(x)
      .map(res => res.json())
      .catch(err => Observable.throw(err))


  }

  public getProjects(): Observable<[project]> {
    var projects = "projects";
    var url = `${this.API_URL}/${projects}`;
    return this.http.get(url)
      .map(res => res.json())
      .catch(err => err.json())
  }


  public addProjects(obj): Observable<[project]> {
    var projects = "projects/addproject";
    var url = `${this.API_URL}/${projects}`;
    return this.http.post(url, obj)
      .map(res => res.json())
      .catch(err => err.json())
  }

  public getProjectById(id: string): Observable<any> {
    var projects = "projects";
    var url = `${this.API_URL}/${projects}/${id}`;
    return this.http.get(url)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }


  public editProject(data: any, id: string): Observable<any> {
    var projects = "projects";
    var x = `${this.API_URL}/${projects}/${id}`
    return this.http.put(x, data)
      .map(res => res.json())
      .catch(err => Observable.throw(err))

  }

  public editProjectAttr(data: any, id: string): Observable<any> {
    var projects = "projects/attributes";
    var x = `${this.API_URL}/${projects}/${id}`
    console.log("data",data)
    return this.http.put(x,data)
      .map(res => res.json())
      .catch(err => Observable.throw(err))

  }
}
