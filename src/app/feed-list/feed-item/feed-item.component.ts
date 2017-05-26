import { Component, OnInit, Input } from '@angular/core';
import { FeedItem } from '../../model/feed-item.model';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.css']
})
export class FeedItemComponent implements OnInit {
  @Input() feedItem: FeedItem;
  constructor() { }

  ngOnInit() {
  }

  openLink() {
    window.open(this.feedItem.link);
  }

}
