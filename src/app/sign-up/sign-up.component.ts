import { Component } from '@angular/core';
import { Router, RouterModule,  } from '@angular/router';
import { SupabaseService } from '../service/supabase.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule, FormsModule ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})

export class SignUpComponent {
  //Campos
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router, private supabaseService: SupabaseService) {}

  // Método para registrarse
  async signUp() {
    try {
      const { error } = await this.supabaseService.signUp(this.email, this.password);
      if (error) {
        console.error('Error al registrarse:', error.message);
      } else {
        console.log('Usuario registrado exitosamente');
        this.router.navigate(['/signin']);
      }
    } catch (err) {
      console.error('Ocurrió un error:', err);
    }
  }

  goToSignIn() {
    this.router.navigate(['/signin']);
  }

}
