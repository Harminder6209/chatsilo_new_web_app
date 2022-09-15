import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  constructor(private httpClient: HttpClient) {}

  /* GET CONTACT LIST API  */
  getContactList(token) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Accept", "application/json");
        headers = headers.append('Authorization',  'Bearer '+token);
    return this.httpClient.get(`${environment.apinewUrl}getContacts`, {
      headers: headers,
    });
  }

  /* ADD NOTES API  */
  addNotes(token, data) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Accept", "application/json");
        headers = headers.append('Authorization',  'Bearer '+token);
    return this.httpClient.post(`${environment.apinewUrl}saveUserNote`, data, {
      headers: headers,
    });
  }

  /* UPDATE NOTES API  */
  updateNotes(token, data, id) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Accept", "application/json");
        headers = headers.append('Authorization',  'Bearer '+token);
    return this.httpClient.post(
      `${environment.apinewUrl}saveUserNote&id=` + id,
      data,
      { headers: headers }
    );
  }

  /* DELETE NOTES API  */
  deleteNotes(token, id) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Accept", "application/json");
        headers = headers.append('Authorization',  'Bearer '+token);
    return this.httpClient.get(`${environment.apinewUrl}deleteUserNote&id=` + id, {
      headers: headers,
    });
  }

  /* GET NOTES API  */
  getNotes(token, data) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Accept", "application/json");
        headers = headers.append('Authorization',  'Bearer '+token);
    return this.httpClient.post(`${environment.apinewUrl}getnotes`, data, {
      headers: headers,
    });
  }

  /* UPDATE TAGS API  */
  updateTags(token, data) {
    console.log(token);
    console.log(data);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Accept", "application/json");
        headers = headers.append('Authorization',  'Bearer '+token);
    return this.httpClient.post(
      `${environment.apinewUrl}update_tag_from_popup`,
      data,
      { headers: headers }
    );
  }
}
