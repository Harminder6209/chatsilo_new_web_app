import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  constructor(private httpClient: HttpClient) { }
  
/* TAG LIST API  */
  getTags(token, fb_account) {
	  	let data = {"fb_account_id":fb_account};
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
		return this.httpClient.post(`${environment.apinewUrl}getTagsWithCounter`,data, { headers: headers });
      }
      
/* TAG USER LIST API  */
  getTagedUser(data,token) {
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
		return this.httpClient.post(`${environment.apinewUrl}getTagUser`,data, { headers: headers });
	  }
      
/* ADD TAG API  */
  addTag(token,data) {
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
		return this.httpClient.post(`${environment.apinewUrl}saveTag`,data, { headers: headers });
	  }
      
/* UPDATE TAG API  */
  updateTag(token,data,id) {
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
		return this.httpClient.post(`${environment.apinewUrl}saveTag?id=`+id,data, { headers: headers });
	  }
      
/* DELETE TAG API  */
  deleteTag(token,id) {
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
		return this.httpClient.get(`${environment.apinewUrl}tagDelete/`+id, { headers: headers });
	  }
      
/* REORDER TAG API  */
  redoderTag(token,data) {
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
		return this.httpClient.post(`${environment.apinewUrl}change_tag_order`, data,{ headers: headers });
	  }

	/* TAG Counter API  */
	tagsCounter(token,data) {
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
		return this.httpClient.post(`${environment.apinewUrl}tagCounter`, data,{ headers: headers });
	}

	changeTagColor(token, data){
		let headers: HttpHeaders = new HttpHeaders();
		headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
		return this.httpClient.post(`${environment.apinewUrl}changeTagColor`, data,{ headers: headers });
	}
  

}