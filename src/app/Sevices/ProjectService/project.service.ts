import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MainEngine } from '../../Engine/MainEngine';

import { Project } from '../../Models/Project';
import { Scene } from 'src/app/Engine/Core/Core';

import { GameProject } from '../../Engine/Core/Core';
// import t from '../../../environments/environment.prod';

//let environment = require('../../../environments/environment.prod');

type projectData = {
  login: String;
  projectName: String;
  _id: String;
  currentScene: Scene;
};
interface projectResponse {
  success: boolean;
  project: projectData;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private backend: string = 'https://web-game-engine-server.herokuapp.com';
  constructor(private http: HttpClient) {
    //console.log(environment.backend);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true,
    // observe: 'response' as 'response',
  };

  GetProjects() {
    return this.http.get<MainEngine[]>(
      `${this.backend}/api/Projects`,
      this.httpOptions
    );
  }

  AddProject(project: GameProject) {
    return this.http.post(
      `${this.backend}/api/Projects/add`,
      project,
      this.httpOptions
    );
  }

  DeleteProject(_id) {
    return this.http.post(
      `${this.backend}/api/Projects/delete`,
      _id,
      this.httpOptions
    );
  }

  SaveProject(object: any) {
    return this.http.post(
      `${this.backend}/api/Projects/save`,
      object,
      this.httpOptions
    );
  }

  GetProject(projectId) {
    return this.http.get<GameProject>(
      `${this.backend}/api/Project/${projectId}`,
      this.httpOptions
    );
  }
}
