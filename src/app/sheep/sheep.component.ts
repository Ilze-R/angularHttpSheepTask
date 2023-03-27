import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { SheepServiceService } from '../service/sheep-service.service';
import { Sheep } from '../types';

@Component({
  selector: 'app-sheep',
  templateUrl: './sheep.component.html',
  styleUrls: ['./sheep.component.scss'],
})
export class SheepComponent implements OnInit {
  // sheep: Sheep[];
  sheep!: Observable<Sheep[]>;
  private url = 'https://baal.fdp.workers.dev/sheep';

  constructor(
    private service: SheepServiceService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    // this.sheep = [{ title: 'jashg', name: 'Wooly', tagline: 'Baaaaa' }];
  }
  ngOnInit(): void {
    this.sheep = this.service.getSheeps().pipe(
      map((data) => {
        console.log(data);
        return data;
      })
    );
  }
}
