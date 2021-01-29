import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  GetProjects() {
    return this.http.get<MainEngine[]>('api/Projects');
  }

  AddProject(project: GameProject) {
    return this.http.post(`${this.backend}/api/Projects/add`, project);
  }

  DeleteProject(_id) {
    return this.http.post(`${this.backend}/api/Projects/delete`, _id);
  }

  SaveProject(object: any) {
    return this.http.post(`${this.backend}/api/Projects/save`, object);
  }

  GetProject(projectId) {
    return this.http.get<GameProject>(
      `${this.backend}/api/Project/${projectId}`
    );
  }
}
