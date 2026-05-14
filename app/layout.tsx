"use client"

import * as React from "react"
import Link from "next/link"
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  InputBase,
  Badge,
} from "@mui/material"
import {
  Search as SearchIcon,
  CameraAlt as CameraIcon,
  Mic as MicIcon,
  ShoppingCart as CartIcon,
  FavoriteBorder as WishlistIcon,
  AccountCircle as AccountIcon,
  Menu as MenuIcon,
} from "@mui/icons-material"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* Header */}
        <AppBar position="static" sx={{ bgcolor: "#ffffff", color: "#000" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Left side: logo and primary nav */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link href="/" passHref>
                <Box component="a" sx={{ display: "flex", alignItems: "center", mr: 3 }}>
                                    <Typography variant="h6" component="span" sx={{ ml: 1, fontWeight: "bold" }}>
                    Tiles Store
                  </Typography>
                </Box>
              </Link>
              <Button component={Link} href="/blog" variant="text" sx={{ color: "inherit" }}>
                Blog
              </Button>
              <Button component={Link} href="/gallery" variant="text" sx={{ color: "inherit" }}>
                Inspiration Gallery
              </Button>
              <Button component={Link} href="/watch" variant="text" sx={{ color: "inherit" }}>
                Watch &amp; Choose
              </Button>
            </Box>

            {/* Center: Search */}
            <Box sx={{ flexGrow: 1, mx: 2, maxWidth: 400 }}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 1,
                  bgcolor: "#f5f5f5",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <InputBase
                  placeholder="Search tiles…"
                  sx={{ ml: 2, flex: 1 }}
                  inputProps={{ "aria-label": "search" }}
                />
                <IconButton type="submit" sx={{ p: 1 }} aria-label="search">
                  <SearchIcon />
                </IconButton>
                <IconButton sx={{ p: 1 }} aria-label="image-search">
                  <CameraIcon />
                </IconButton>
                <IconButton sx={{ p: 1 }} aria-label="voice-search">
                  <MicIcon />
                </IconButton>
              </Box>
            </Box>

            {/* Right side: icons */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton component={Link} href="/auth/sign-in" aria-label="account">
                <AccountIcon />
              </IconButton>
              <IconButton component={Link} href="/wishlist" aria-label="wishlist">
                <Badge badgeContent={0} color="secondary">
                  <WishlistIcon />
                </Badge>
              </IconButton>
              <IconButton component={Link} href="/cart" aria-label="cart">
                <Badge badgeContent={0} color="secondary">
                  <CartIcon />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Page content */}
        <Box sx={{ p: 3 }}>{children}</Box>
        {/* Footer */}
        <Box sx={{ bgcolor: "#fafafa", py: 3, textAlign: "center", mt: 4 }}>
          <Typography variant="body2" color="text.secondary">
            Customer Care: 7722003663
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
            © {new Date().getFullYear()} Tiles Store
          </Typography>
        </Box>
      </body>
    </html>
  )
}
