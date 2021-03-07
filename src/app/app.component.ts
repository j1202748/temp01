import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Article } from './Article';
import { DataServiceService } from './data-service.service';

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

  data : Article[] =[];

  constructor(private datasvc : DataServiceService){}

  ngOnInit(): void {

    this.datasvc.loadArticle().subscribe(result=>{

    this.data= result;
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


