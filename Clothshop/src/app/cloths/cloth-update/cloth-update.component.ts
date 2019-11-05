import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClothService} from '../../shared/services/cloth.service';
import {FormControl, FormGroup} from '@angular/forms';
import {executeDevServerBuilder} from '@angular-devkit/build-angular';


@Component({
  selector: 'app-cloth-update',
  templateUrl: './cloth-update.component.html',
  styleUrls: ['./cloth-update.component.css']
})
export class ClothUpdateComponent implements OnInit {
  id: number;
  clothForm = new FormGroup({
    type: new FormControl(''),
    size: new FormControl(''),
    color: new FormControl(''),
  });
  constructor(private route: ActivatedRoute,
              private clothService: ClothService,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    const cloth = this.clothService.getClothById(this.id);
    this.clothForm.patchValue({
      type: cloth.type,
      size: cloth.size,
      color: cloth.color,
      id: cloth.id
    });
  }
  save() {
    const cloth = this.clothForm.value;
    cloth.id = this.id;
    this.clothService.updateCloth(cloth);
    this.clothForm.reset();
    this.router.navigateByUrl('/cloths');
  }
}
