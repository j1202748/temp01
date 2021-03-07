import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  keyword = 'demo1';

  data = {
      keyword : 'demo1'
  }
  doSearch($event:string)
  {
    this.data.keyword = $event;
  }
}
