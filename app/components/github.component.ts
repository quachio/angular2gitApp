import { Component }     from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
    moduleId:    module.id,
    selector:    'github',
    templateUrl: 'github.component.html'
})
export class GithubComponent {
  user:  any;
  repos: any;
  username: any;

  // Angular 2 way of injecting service by using constructor
  constructor(private _githubService: GithubService) {
    this.user = false;
    /*
    this._githubService.getUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
      console.log(this.repos);
    });
    */
  }

  // Methods
  search() {
    console.log(this.username);
    this._githubService.updateUsername(this.username);

    this._githubService.getUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
      console.log(this.repos);
    });
    }
  }
