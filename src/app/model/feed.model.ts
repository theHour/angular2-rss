//importing the necessary models so we can use them in this class
import { FeedInfo } from './feed-info.model';
import { FeedItem } from './feed-item.model';

export class Feed {
    constructor(public status: string, public feed: FeedInfo, public items: Array<FeedItem>) {

    }
}