import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneralService } from '../core/services/general.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:  [GeneralService]
})
export class AppComponent {
  title = 'front_revealingpop';
}
