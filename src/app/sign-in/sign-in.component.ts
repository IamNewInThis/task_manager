import { Component } from '@angular/core';
import { Router, RouterModule,  } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterModule, ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  constructor(private router: Router) {}

  goToSignUp() {
    this.router.navigate(['/signup']);
  }
}
