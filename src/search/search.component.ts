import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public Url = 'https://api.unsplash.com/search/photos?client_id=bbUGe7RTDPbdkjQk-4FewN8tzJ29jj2JG2xBHgtTvYI&query=birds&per_page=30&orientation=portrait&page=1';
  constructor() { }

  ngOnInit(): void {
  }

}
