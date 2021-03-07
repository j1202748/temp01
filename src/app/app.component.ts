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

    //BUG 老師想的怪方法解法 = =   ，先輸入字按Enter，再按ESC，再輸入字後按ESC有BUG
    if($event == '')
    {
      this.data.keyword=' ';
      setTimeout(()=>{
        this.data.keyword='';
      },1);

    }
  }
}
