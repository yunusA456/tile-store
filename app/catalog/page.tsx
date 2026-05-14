"use client"

import * as React from "react"
import Link from "next/link"
import { Box, Grid, Card, CardActionArea, CardContent, Typography } from "@mui/material"

const categories = [
  "Dining Hall",
  "Bedroom",
  "Kitchen",
  "Bathroom",
  "Parking",
  "Wall Tiles",
  "Elevation",
]

export default function CatalogHome() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Tile Categories
      </Typography>
      <Grid container spacing={3}>
        {categories.map((cat) => (
          <Grid item xs={12} sm={6} md={4} key={cat}>
            <Card elevation={2}>
              <CardActionArea component={Link} href={`/catalog/${cat.toLowerCase().replace(/ /g, "-")}`}>
                <CardContent>
                  <Typography variant="h6" align="center">{cat}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
