"use client";

import * as React from "react";
import Link from "next/link";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Tiles Store
            </Typography>
            <Button color="inherit" component={Link} href="/" sx={{ mr: 2 }}>
              Home
            </Button>
            <Button color="inherit" component={Link} href="/catalog" sx={{ mr: 2 }}>
              Catalog
            </Button>
            <Button color="inherit" component={Link} href="/auth/sign-in">
              Sign In
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ p: 3 }}>{children}</Box>
      </body>
    </html>
  );
}
