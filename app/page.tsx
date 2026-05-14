"use client";

import * as React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const categories = [
  "Dining Hall",
  "Bedroom",
  "Kitchen",
  "Bathroom",
  "Parking",
  "Wall Tiles",
  "Elevation",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 8, md: 12 },
          color: "common.white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: "bold" }}>
            Tiles Store
          </Typography>
          <Typography variant="h5" gutterBottom>
            Discover beautiful tiles for every space – dining hall, bedroom, kitchen, and more.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            href="/catalog"
            sx={{ mt: 3 }}
          >
            Browse Collections
          </Button>
        </Container>
      </Box>

      {/* Category Grid */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom align="center">
          Shop by Category
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {categories.map((cat) => (
            <Grid item key={cat} xs={12} sm={6} md={4}>
              <Card elevation={3}>
                <CardActionArea
                  component={Link}
                  href={`/catalog/${cat.toLowerCase().replace(/ /g, "-")}`}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1600585154340-be6166a56a0c?auto=format&fit=crop&w=800&q=80"
                    alt={cat}
                  />
                  <CardContent>
                    <Typography variant="h6" align="center">
                      {cat}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", py: 3, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          Customer Care: 7722003663
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          © {new Date().getFullYear()} Tiles Store
        </Typography>
      </Box>
    </>
  );
}
