export class FeedItem {
    constructor(public title: string, public pubDate: string, public link: string, public guid: string, public author: string, public thumbnail: string, 
                public description: string, public content: string, public enclosure: Array<string>, public categories: Array<string>) {

    }
}