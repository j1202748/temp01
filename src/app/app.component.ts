import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  keyword = 'demo1';

  search = {
      keyword : 'demo1'
  }

  data : any[] =[];

  constructor(private http:HttpClient){}

  ngOnInit(): void {
  this.http.get<any[]>('/api/articles.json').subscribe(re=>{

    this.data= re;
  });


}

  doSearch($event:string)
  {
    this.search.keyword = $event;

    //BUG 老師想的怪方法解法 = =   ，先輸入字按Enter，再按ESC，再輸入字後按ESC有BUG
    if($event == '')
    {
      this.search.keyword=' ';
      setTimeout(()=>{
        this.search.keyword='';
      },1);

    }
  }
}
