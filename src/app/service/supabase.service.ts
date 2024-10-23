import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Las claves de Supabase
const supabaseUrl = 'https://cmsvelibmbutckrduyev.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtc3ZlbGlibWJ1dGNrcmR1eWV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3MTQ5MTksImV4cCI6MjA0NTI5MDkxOX0.ABjNlvC_vCdO-asxlQF6I8B4FS8ENGqJXwr__dnmmYc';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  // Métodos para interactuar con Supabase
  async signUp(email: string, password: string) {
    return this.supabase.auth.signUp({ email, password });
  }

  async signIn(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({ email, password });
  }

  async signOut() {
    return this.supabase.auth.signOut();
  }

  // Puedes añadir más métodos según tus necesidades
}