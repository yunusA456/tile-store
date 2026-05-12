"use client";

import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from '../../../lib/supabaseClient'
import { Box, TextField, Button, Typography } from "@mui/material";

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error: signUpError } = await supabase.auth.signUp({ email, password });
    if (signUpError) {
      setError(signUpError.message);
      return;
    }
    // Insert additional user profile info
    if (data?.user) {
      await supabase.from('users').insert({
        id: data.user.id,
        full_name: fullName,
        phone: '',
        is_admin: false,
      });
    }
    router.push('/');
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
      <Typography variant="h5" gutterBottom>Sign Up</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography color="error" variant="body2" sx={{ mt: 1 }}>{error}</Typography>
        )}
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Sign Up</Button>
      </form>
    </Box>
  );
}
