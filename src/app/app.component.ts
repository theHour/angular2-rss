import { Component, ViewChild, ElementRef } from '@angular/core';
import { FeedService } from './feed-list/feed.service';
import { Feed } from './model/feed.model';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
