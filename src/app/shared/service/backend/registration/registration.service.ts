import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IRegistration} from '../../../model/registration.model';
import {Observable} from 'rxjs';
import {BASE_API_URL} from '../configuration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) {
  }

  register(team: IRegistration): Observable<any> {
    return this.http.post(BASE_API_URL + 'registration', team);
  }

  getRegistrations(): Observable<IRegistration[]> {
    return this.http.get<IRegistration[]>(BASE_API_URL + 'completion/registrations');
  }
}
