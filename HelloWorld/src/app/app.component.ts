import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  // uc-2 
  // message: string = 'Hello from BridgeLabz';
  ngOnInit(): void{
    this.title = 'Hello From BridgeLab(data binding)';
  }
}
