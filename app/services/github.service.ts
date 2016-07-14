import { Injectable }  from '@angular/core';
import { Http }        from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username = '';
  private base_api_url = 'https://api.github.com/users/';
  private client_id = 'b1dcf46a2b177762af21';
  private client_secret = '15618b40da99269426c7aeb42cce03ba27ea2f5e';
  private auth = '?client_id=' + this.client_id + '&client_secret=' + this.client_secret;

  constructor(private _http: Http) {
    console.log('Injecting http');
    console.log('Github Service Started...');
  }

  getUser() {
    console.log('GithubService: getUser()');
    let user = this.base_api_url + this.username + this.auth;
    return this._http.get(user).map(res => res.json());
  }

  getRepos() {
    console.log('GithubSerice: getRepos()');
    let repos = 'https://api.github.com/users/' + this.username + '/repos' + this.auth;
    return this._http.get(repos).map(res => res.json());
  }

  updateUsername(username: any) {
    console.log('GithubService: updateUsername' + '(' + username + ')');
    this.username = username;
  }
}
