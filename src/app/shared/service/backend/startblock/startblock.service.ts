import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IStartblock} from '../../../model/startblock.model';
import {IStartblockWrapper} from '../../../model/startblock-wrapper.model';
import {BASE_API_URL} from '../configuration';

@Injectable({
  providedIn: 'root'
})
export class StartblockService {

  constructor(private http: HttpClient) {
  }

  getStartblocks(): Observable<IStartblockWrapper> {
    return this.http.get<IStartblockWrapper>(BASE_API_URL + 'registration/blocks');
  }
}

const startblocks: IStartblock[] = [
  {
    id: 1,
    name: 'Block A',
    availableSpots: 5
  },
  {
    id: 2,
    name: 'Block B',
    availableSpots: 3
  },
  {
    id: 3,
    name: 'Block C',
    availableSpots: 0
  },
]
