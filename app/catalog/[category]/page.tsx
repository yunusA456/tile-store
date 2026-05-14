"use client";

import * as React from "react";
import { useParams } from "next/navigation";
import { Box, Typography } from "@mui/material";

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        {category
          ? `${category.replace(/-/g, " ")} Tiles`
          : "Loading..."}
      </Typography>

      {/* Tile list will be populated here later */}
    </Box>
  );
}