import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    constructor(private httpClient: HttpClient) { }

    /* UPDATE PROFILE API  */
    updateProfile(token,data) {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
        return this.httpClient.post(`${environment.apinewUrl}refresh_token`,data, { headers: headers });
    }

    /* DELTE ACCOUNT API  */
    deleteAccount(token,data) {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
        return this.httpClient.post(`${environment.apinewUrl}unlinkFbAccount`,data, { headers: headers });
    }

    /* MAKE ACCOUNT PRIMARY API  */
    makeAccountPrimary(token,data) {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
        return this.httpClient.post(`${environment.apinewUrl}makePrimaryFbAccount`,data, { headers: headers });
    }

}