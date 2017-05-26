import { Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
import { FeedItem } from '../model/feed-item.model';
import { Feed} from '../model/feed.model';
import { FeedService } from './feed.service';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})
export class FeedListComponent implements OnInit {

  ngOnInit() {
  }
  private feed: Feed;
  private urlToSend: string;
  private isLoading: boolean = false;
  @ViewChild('urlEntered') urlEntered: ElementRef;
  constructor(private feedService: FeedService) {}

  getFeeds() {
    this.urlToSend = this.urlEntered.nativeElement.value;
    this.urlEntered.nativeElement.value = "";
    console.log(this.urlToSend);
    let encodeedUrl = encodeURIComponent(this.urlToSend);
    this.feedService.getFeeds(encodeedUrl)
                    .subscribe(res => this.feed = res,
                               error => console.log(error));
  }
}
