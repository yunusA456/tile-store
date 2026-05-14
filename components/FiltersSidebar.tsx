import * as React from "react"
import { Box, Typography, FormControl, FormGroup, FormControlLabel, Checkbox, Button } from "@mui/material"

export default function FiltersSidebar() {
  // placeholder filter options – can be expanded later
  const categories = ["Wall Tile", "Floor Tile", "Mosaic", "Porcelain"]
  const finishes = ["Matte", "Glossy", "Textured"]
  const sizes = ["30x30", "45x45", "60x60", "120x120"]

  const [selected, setSelected] = React.useState({})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected({ ...selected, [event.target.name]: event.target.checked })
  }

  const clearAll = () => {
    setSelected({})
  }

  return (
    <Box sx={{ p: 2, border: "1px solid #e0e0e0", borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      <Button size="small" onClick={clearAll} sx={{ mb: 2 }}>
        Clear All
      </Button>

      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <Typography variant="subtitle2" gutterBottom>
          Category
        </Typography>
        <FormGroup>
          {categories.map((cat) => (
            <FormControlLabel
              key={cat}
              control={<Checkbox name={cat} checked={!!selected[cat]} onChange={handleChange} />}
              label={cat}
            />
          ))}
        </FormGroup>
      </FormControl>

      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <Typography variant="subtitle2" gutterBottom>
          Finish
        </Typography>
        <FormGroup>
          {finishes.map((fin) => (
            <FormControlLabel
              key={fin}
              control={<Checkbox name={fin} checked={!!selected[fin]} onChange={handleChange} />}
              label={fin}
            />
          ))}
        </FormGroup>
      </FormControl>

      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <Typography variant="subtitle2" gutterBottom>
          Size
        </Typography>
        <FormGroup>
          {sizes.map((size) => (
            <FormControlLabel
              key={size}
              control={<Checkbox name={size} checked={!!selected[size]} onChange={handleChange} />}
              label={size}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  )
}
