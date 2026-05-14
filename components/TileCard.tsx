import * as React from "react"
import Link from "next/link"
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Rating,
} from "@mui/material"

type Tile = {
  id: string
  title: string
  sku: string
  size: string
  finish: string
  price: string
  rating: number
  imageUrl: string
}

export default function TileCard({ tile }: { tile: Tile }) {
  return (
    <Card elevation={3} sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardActionArea component={Link} href={`/tiles/${tile.id}`}>
        <CardMedia component="img" height="180" image={tile.imageUrl} alt={tile.title} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom>{tile.title}</Typography>
          <Typography variant="body2" color="text.secondary">{tile.sku}</Typography>
          <Typography variant="body2" color="text.secondary">{tile.size} | {tile.finish}</Typography>
          <Rating value={tile.rating} precision={0.5} readOnly size="small" sx={{ mt: 0.5 }} />
          <Typography variant="subtitle1" color="primary" sx={{ mt: 0.5 }}>
            {tile.price}/Sq.Ft
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">Quick View</Button>
        <Button size="small" color="primary">Add to Compare</Button>
        {/* Uncomment the line below if price should be hidden and user can request */}
        {/* <Button size="small" color="secondary">Request for Price</Button> */}
      </CardActions>
    </Card>
  )
}
