"use client";

import * as React from "react";
import Link from "next/link";
import { Box, Typography, Grid, Card, CardActionArea, CardContent } from "@mui/material";

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
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Tiles Store
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Choose a category to explore our collection.
      </Typography>
      <Grid container spacing={2}>
        {categories.map((cat) => (
          <Grid item xs={12} sm={6} md={4} key={cat}>
            <Card>
              <CardActionArea component={Link} href={`/catalog/${cat.toLowerCase().replace(/ /g, "-")}`}>
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
    </Box>
  );
}
