import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  public search: any = '';
  categories_s: any;
  arrayLists: string[] = [];
  searchValue: string = "";


  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts().subscribe((response) => {
      this.categories_s = response;
      let x = this.categories_s;
      let arr = x.categories;
      // console.log(arr);

      for (let i = 0; i < arr.length; i++) {
        this.arrayLists.push(arr[i])
      }
      // console.log(this.arrayLists);
    });
  }
}
