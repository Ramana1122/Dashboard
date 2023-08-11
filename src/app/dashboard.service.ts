import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getDesignationData(): Observable<any> {
    return this.http.get<any>('http://nhsappchna6210.cscidp.net/rdb/api/Employee?Pivot=Designation');
  }

  getTeamData(): Observable<any> {
    return this.http.get<any>('http://nhsappchna6210.cscidp.net/rdb/api/Employee?Pivot=PRODUCT_WORK_AREA');
  }

  getReleaseData(): Observable<any> {
    return this.http.get<any>('http://nhsappchna6210.cscidp.net/rdb/api/Employee?Pivot=Release');
  }

  getResignedData(): Observable<any> {
    return this.http.get<any>('http://nhsappchna6210.cscidp.net/rdb/api/Employee?Pivot=Resigned');
  }
  getonbordData(): Observable<any> {
    return this.http.get<any>('http://nhsappchna6210.cscidp.net/rdb/api/Employee?Pivot=ONBOARDING');
  }

  // Add methods for other API calls if needed
}
