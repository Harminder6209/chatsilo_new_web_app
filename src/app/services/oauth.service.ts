import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OauthService {
  constructor(private httpClient: HttpClient) { }
  
/* LOGIN API  */
  loginUser(data) {
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');
		return this.httpClient.post(`${environment.apinewUrl}login`, data, { headers: headers });
	  }
  
/* FORGET PASSWORD EMAIL SEND API */  
	forgetpassword(data) {
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');
		return this.httpClient.post(`${environment.apinewUrl}password/create`, data, { headers: headers });
	}

/* RESET PASSWORD API   */ 
	resetpassword(data) {
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');
		return this.httpClient.post(`${environment.apinewUrl}password/reset`, data, { headers: headers });
	}

}