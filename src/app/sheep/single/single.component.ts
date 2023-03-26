import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SheepServiceService } from 'src/app/service/sheep-service.service';
import { Sheep, SheepDetailed } from 'src/app/types';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit {
  sheepByName!: Observable<SheepDetailed>;

  constructor(
    private service: SheepServiceService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');

    if (name) {
      this.sheepByName = this.service.getSheepByName(name);
    }
  }
}
