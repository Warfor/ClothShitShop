import { Component, OnInit } from '@angular/core';
import {Cloth} from '../../shared/models/cloth';
import {ClothService} from '../../shared/services/cloth.service';

@Component({
  selector: 'app-cloths-list',
  templateUrl: './cloths-list.component.html',
  styleUrls: ['./cloths-list.component.css']
})
export class ClothsListComponent implements OnInit {

  cloths: Cloth[];

  constructor(private clothService: ClothService) {
  }

  ngOnInit() {
    this.cloths = this.clothService.getCloths();
  }

  delete(id: number) {
    this.clothService.deleteCloth(id);
    this.cloths = this.clothService.getCloths();
  }
}


