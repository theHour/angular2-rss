import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FeedListComponent } from './feed-list/feed-list.component';
import { FeedItemComponent } from './feed-list/feed-item/feed-item.component';
import { FeedService } from './feed-list/feed.service';
import { NytimesComponent } from './nytimes/nytimes.component';

import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedListComponent,
    FeedItemComponent,
    NytimesComponent,
    FooterComponent,
    HomeComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'nytimes',
        component: NytimesComponent
      },
      {
        path: 'rsslist',
        component: FeedListComponent
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'location',
        component: LocationComponent
      }
    ])
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
