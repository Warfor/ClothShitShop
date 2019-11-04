import { Component, OnInit } from '@angular/core';
import {Cloth} from '../../shared/models/cloth';
import {ClothService} from '../../shared/services/cloth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cloth-details',
  templateUrl: './cloth-details.component.html',
  styleUrls: ['./cloth-details.component.css']
})
export class ClothDetailsComponent implements OnInit {
cloth: Cloth;

  constructor(    private route: ActivatedRoute,
                  private clothService: ClothService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cloth = this.clothService.getClothById(id);
  }

}
