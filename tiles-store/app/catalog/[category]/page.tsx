"use client";

import * as React from "react";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        {category ? `${category.toString().replace(/-/g, " ")} Tiles` : "Loading..."}
      </Typography>
      {/* Tile list will be populated here later */}
    </Box>
  );
}
