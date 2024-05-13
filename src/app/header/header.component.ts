
import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ScrollService } from '../Services/Scroll.sevice';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

  @ViewChild('sec1') sec1!:ElementRef ;


  ngOnInit(): void {
    console.log(this.sec1);
  }
}
