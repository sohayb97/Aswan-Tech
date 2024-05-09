
import { Component} from '@angular/core';
import { ScrollService } from '../Services/Scroll.sevice';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(private scrollService: ScrollService){}
  scrollTo(section: string): void {
    this.scrollService.scrollToSection(section);
  }
}
