import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class studentApiService {
  constructor(private httpclient: HttpClient) {}

  getData(): Observable<any> {
    return this.httpclient.get(
      //CHANGE BELOW TO API URL. API CAN BE LOCAL OR ONLINE.
      "enter url here"
    );
  }
}
