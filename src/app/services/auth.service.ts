import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { LocalStorageService } from './local-storage.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private locaolStorageService: LocalStorageService) { }

  login(identifiant: string, password: string) {
    return _.find(this.locaolStorageService.getLocalStorage("users"), { 'identifiant': identifiant, 'password': password });
  }
}
