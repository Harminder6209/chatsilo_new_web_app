import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class TemplateService {
	constructor(private httpClient: HttpClient) { }

	/* TEMPLATE LIST API  */
	getTemplate(token) {
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
		return this.httpClient.get(`${environment.apinewUrl}getTemplate`, { headers: headers });
	}


	/* TEMPLATE LIST WITH MESSAGE  */
	getTemplatesWithMessage(token) {
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
		return this.httpClient.get(`${environment.apinewUrl}getTemplatesWithMesage`, { headers: headers });
	}

	/* TEMPLATE LIST API  */
	getTemplateUser(id, token) {
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
		return this.httpClient.get(`${environment.apinewUrl}getTemplateMessage/` + id, { headers: headers });
	}

	/* ADD TEMPLATE API  */
	addTemplate(token, data) {
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
		return this.httpClient.post(`${environment.apinewUrl}saveTemplate`, data, { headers: headers });
	}

	/* UPDATE TEMPLATE API  */
	updateTemplate(token, data, id) {
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
		return this.httpClient.post(`${environment.apinewUrl}saveTemplate?id=` + id, data, { headers: headers });
	}

	/* DELETE TEMPLATE API  */
	deleteTempalte(token, id) {
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
		return this.httpClient.get(`${environment.apinewUrl}templateDelete/` + id, { headers: headers });
	}

	/* ADD TEMPLATE MESSAGE API  */
	addTemplateMessage(token, data) {
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
		return this.httpClient.post(`${environment.apinewUrl}saveMessage`, data, { headers: headers });
	}

	/* UPDATE TEMPLATE MESSAGE  API  */
	updateTemplateMessage(token, data, id) {
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
		return this.httpClient.post(`${environment.apinewUrl}saveMessage?id=` + id, data, { headers: headers });
	}

	/* DELETE TEMPLATE MESSAGE  API  */
	deleteTempalteMessage(token, id) {
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
		return this.httpClient.get(`${environment.apinewUrl}templateMessageDelete/` + id, { headers: headers });
	}
      
	/* REORDER TEMPLATE API  */
	  redoderTemplate(token,data) {
			let headers: HttpHeaders = new HttpHeaders();
			headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
			return this.httpClient.post(`${environment.apinewUrl}change_template_order`, data,{ headers: headers });
		  }
	  
      
	/* REORDER MESSAGE API  */
	  redoderMessage(token,data) {
			let headers: HttpHeaders = new HttpHeaders();
			headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
			return this.httpClient.post(`${environment.apinewUrl}change_message_order`, data,{ headers: headers });
		  }
	  

}