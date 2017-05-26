import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Feed } from '../model/feed.model';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedService {
  private urlToCovert: string = 'https://rss2json.com/api.json?rss_url=';
  constructor(private http: Http) { }

  getFeeds(url: string) : Observable<Feed> {
      return this.http.get(this.urlToCovert+url)
                 .map(res => res.json() as Feed)
                 .catch(err => err.message);
  }
}
