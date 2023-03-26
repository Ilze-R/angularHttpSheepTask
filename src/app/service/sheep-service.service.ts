import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Subject, of, map } from 'rxjs';
import { Sheep, SheepDetailed } from '../types';

@Injectable({
  providedIn: 'root',
})
export class SheepServiceService {
  error = new Subject<string>();
  private url = 'https://baal.fdp.workers.dev/sheep';

  constructor(private http: HttpClient) {}

  getSheeps(): Observable<Sheep[]> {
    return this.http.get<Sheep[]>(this.url);
  }

  getSheepByName(name: string): Observable<SheepDetailed> {
    const url = `${this.url}/${name}`;
    return this.http.get<SheepDetailed>(url);
  }
}
