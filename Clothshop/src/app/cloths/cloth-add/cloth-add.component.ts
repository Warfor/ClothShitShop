import { Component, OnInit } from '@angular/core';
import {ClothService} from '../../shared/services/cloth.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cloth-add',
  templateUrl: './cloth-add.component.html',
  styleUrls: ['./cloth-add.component.css']
})
export class ClothAddComponent implements OnInit {
  clothForm = new FormGroup({
    type: new FormControl(''),
    size: new FormControl(''),
    color: new FormControl(''),
  });
  constructor(private clothService: ClothService, private router: Router) { }

  ngOnInit() {
  }
  save() {
    const cloth = this.clothForm.value;
    this.clothService.addCloth(cloth);
    this.clothForm.reset();
    this.router.navigateByUrl('/cloths');
  }
}
