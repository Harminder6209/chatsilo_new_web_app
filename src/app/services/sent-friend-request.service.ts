import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SentFriendRequestService {

  constructor(private httpClient: HttpClient) { }

  /*Get sent friend requests*/
  getSentFriendRequest(params,token, fb_account){
    let data = {"fb_account_id":fb_account,'params':params};
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
    return this.httpClient.post(`${environment.apinewUrl}getSentFriendRequestWithCount`,data, { headers: headers });
  }

  /*delete single request*/
  deleteSentFriendRequest(token, id){

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
        headers = headers.append('Authorization',  'Bearer '+token);
    return this.httpClient.get(`${environment.apinewUrl}sentFriendRequestDelete/`+id, { headers: headers }); 
  }
  /*delete multiple requests*/
  deleteMultipleSentFriendRequest(token, ids){
    let data = {"ids":ids};
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization',  'Bearer '+token);
    return this.httpClient.post(`${environment.apinewUrl}deleteMultipleSentFriendRequest`,data, { headers: headers });
  }

}
