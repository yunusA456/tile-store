"use client"

import * as React from "react"
import { useParams } from "next/navigation"
import { Box, Grid, Typography, Select, MenuItem, FormControl, InputLabel, Pagination } from "@mui/material"
import TileCard from "@/components/TileCard"
import FiltersSidebar from "@/components/FiltersSidebar"

// Mock tile data – replace with Supabase fetch later
const generateMockTiles = (count: number) => {
  const sizes = ["30x30", "45x45", "60x60", "12x12"]
  const finishes = ["Matte", "Glossy", "Textured"]
  const titles = ["Subway Tile", "Marble Mosaic", "Porcelain Square", "Ceramic Classic"]
  const images = [
    "https://images.unsplash.com/photo-1582368535266-02e9d0fbd0c5?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1567137097071-8d57dc53831e?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1606851160160-b4a7fb27c90a?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1586525924329-66a5fbe7b418?auto=format&fit=crop&w=400&q=80",
  ]
  const tiles = []
  for (let i = 0; i < count; i++) {
    const idx = i % titles.length
    tiles.push({
      id: `tile-${i}`,
      title: titles[idx] + " " + (i + 1),
      sku: `SKU${1000 + i}`,
      size: sizes[idx % sizes.length],
      finish: finishes[idx % finishes.length],
      price: `${150 + (i % 5) * 10}`,
      rating: (3 + (i % 3) + 0.5),
      imageUrl: images[idx % images.length],
    })
  }
  return tiles
}

export default function CategoryPage() {
  const params = useParams()
  const category = (params as any).category as string

  // pagination state (simple client‑side slicing)
  const [page, setPage] = React.useState(1)
  const itemsPerPage = 9
  const allTiles = React.useMemo(() => generateMockTiles(27), []) // 27 mock tiles
  const pageCount = Math.ceil(allTiles.length / itemsPerPage)
  const displayedTiles = allTiles.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  const handlePageChange = (event: React.ChangeEvent<any>, value: number) => {
    setPage(value)
  }

  const handleSortChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    // placeholder – real implementation would sort the tile array
    console.log("Sort by", event.target.value)
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {category ? `${category.replace(/-/g, " ")} Tiles` : "Tiles"}
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        {/* Filters */}
        <Box sx={{ width: 260 }}>
          <FiltersSidebar />
        </Box>
        {/* Main catalog area */}
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography variant="subtitle1">{allTiles.length} products</Typography>
            <FormControl variant="outlined" size="small" sx={{ minWidth: 150 }}>
              <InputLabel id="sort-label">Sort by</InputLabel>
              <Select labelId="sort-label" label="Sort by" defaultValue="new" onChange={handleSortChange}>
                <MenuItem value="new">New Arrival</MenuItem>
                <MenuItem value="priceLow">Price: Low to High</MenuItem>
                <MenuItem value="priceHigh">Price: High to Low</MenuItem>
                <MenuItem value="rating">Rating</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Grid container spacing={3}>
            {displayedTiles.map((tile) => (
              <Grid item xs={12} sm={6} md={4} key={tile.id}>
                <TileCard tile={tile} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination count={pageCount} page={page} onChange={handlePageChange} color="primary" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
