import { Component } from '@angular/core';
import { Router, RouterModule,  } from '@angular/router';
import { SupabaseService } from '../service/supabase.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  //Campos
  email: string = '';
  password: string = '';

  constructor(private router: Router, private supabaseService: SupabaseService) {}

  goToSignUp() {
    this.router.navigate(['/signup']);
  }

  // Manejar el inicio de sesión
  async onSignIn() {
    const { error } = await this.supabaseService.signIn(this.email, this.password);
    if (error) {
      console.error('Error signing in:', error.message);
      alert('Error iniciando sesión: ' + error.message); // Mostrar mensaje de error al usuario
    } else {
      console.log('Signed in successfully');
      this.router.navigate(['/home']); // Redirigir a la página principal
    }
  }
  
}
