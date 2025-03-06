import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // uc-5
  standalone: true,
  imports:[FormsModule],
})
export class AppComponent {
  title = 'HelloWorld';
  // uc-2 
  // message: string = 'Hello from BridgeLabz';
  ngOnInit(): void{
    this.title = 'Hello From BridgeLab(data binding)';
  }

  //uc-3
  imgurl = "data:image/jpeg;base64,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";

  //uc-4
  url = "https://www.bridgelabz.com/";

  onClick($event : Event): void {
    console.log("Image clicked", $event);
    window.open(this.url, "_blank"); // Opens the link in a new tab
  }
 
  // uc-5 
  userName: string = '';
  


}

