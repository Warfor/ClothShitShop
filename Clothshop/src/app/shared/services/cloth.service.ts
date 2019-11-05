import { Injectable } from '@angular/core';
import {Cloth} from '../models/cloth';
import {migrateLegacyGlobalConfig} from '@angular/cli/utilities/config';

@Injectable({
  providedIn: 'root'
})
export class ClothService {
cloths: Cloth[];
  id = 1;
  constructor() {
    this.cloths = [
      {id: this.id++, type: 'Jacket', size: 'XL', color: 'Black'},
      {id: this.id++, type: 'Jacket', size: 'L', color: 'White'}
    ];
  }
  getCloths(): Cloth[] {
    return this.cloths;
  }

  addCloth(cloth: Cloth) {
    cloth.id = this.id++;
    this.cloths.push(cloth);
}

  updateCloth(cloth: Cloth) {
    const clotToUpdate = this.cloths.find(clot => cloth.id === clot.id);
    const index = this.cloths.indexOf(clotToUpdate);
    this.cloths[index] = cloth;
}
  deleteCloth(id: number) {
    this.cloths = this.cloths.filter(clot => clot.id !== id);
}

  getClothById(id: number) {
    return this.cloths.find(clot => clot.id === id);
}
}
