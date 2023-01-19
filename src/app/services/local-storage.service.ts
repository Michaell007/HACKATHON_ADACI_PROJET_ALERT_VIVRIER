import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setLocalStorage(name: string, value: any) {
    localStorage.setItem(name, value);
  }

  getLocalStorage(name: string) {
    return localStorage.getItem(name);
  }

  deleteLocalStorage(name: string) {
    localStorage.removeItem(name);
  }

  viderLocalStorage(name: string) {
    localStorage.clear();
  }

  initialisationDefaultsUsersDatas() {

    let users: User[] = [
      {
        id: 1,
        name: "Daniel",
        prenom: "Georgette Ivan",
        password: "1234"
      },
      {
        id: 2,
        name: "Desire",
        prenom: "Elec tride",
        password: "1234"
      },
      {
        id: 3,
        name: "Raissa",
        prenom: "Loic derser",
        password: "1234"
      },
      {
        id: 4,
        name: "Michael",
        prenom: "Ouattara Frack",
        password: "1234"
      },
    ]

    let products: Product[] = [
      {
        id: 1,
        name: "Banane"
      },
      {
        id: 2,
        name: "Manioc"
      },
      {
        id: 3,
        name: "Igname"
      },
    ]

    this.setLocalStorage("users", JSON.stringify(users));
    this.setLocalStorage("products", JSON.stringify(products));
  }

}
