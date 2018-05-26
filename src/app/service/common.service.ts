import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CommonService {

  items;
  constructor(private http:Http) { }

  getData():Observable<any[]> {
    return this.http.get('http://starlord.hackerearth.com/beercraft') 
        .map(this.extractData)
        .catch(this.handleError);
    }


    private extractData(res:Response) {
      let body = res.json();
      this.items = body;
      return body || [];
    }

    private handleError(error:any) {
      // In a real world app, we might use a remote logging infrastructure
      // We'd also dig deeper into the error to get a better message
      let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
    }
}
