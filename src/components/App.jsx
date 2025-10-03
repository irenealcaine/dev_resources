import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Typography,
  TextField,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import ResourceCard from "./ResourceCard";
import { resources, categories } from "../data/examples";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    background: { default: "#121212", paper: "#1e1e1e" },
  },
});

export default function App() {
  const [q, setQ] = useState("");
  const [categoryId, setCategoryId] = useState("");

  // Filtrado por categoría y búsqueda
  const filtered = resources
    .filter(r => (categoryId ? r.categoryId === categoryId : true))
    .filter(r =>
      (r.title + r.description + r.tags.join(" "))
        .toLowerCase()
        .includes(q.toLowerCase())
    )
    .sort((a, b) => b.rating - a.rating); // ordenar por rating descendente

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="md" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Typography variant="h4" gutterBottom>
          Recursos para desarrolladores
        </Typography>

        {/* Filtros */}
        <TextField
          fullWidth
          label="Buscar..."
          variant="outlined"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          style={{ marginBottom: "1rem" }}
        />

        <FormControl fullWidth variant="outlined" style={{ marginBottom: "1rem" }}>
          <InputLabel id="category-label">Categoría</InputLabel>
          <Select
            labelId="category-label"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            label="Categoría"
          >
            <MenuItem value="">
              <em>Todo</em>
            </MenuItem>
            {categories.map(c => (
              <MenuItem key={c.id} value={c.id}>
                {c.icon} {c.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Grid de recursos */}
        <Grid container spacing={2}>
          {filtered.map(r => (
            <Grid item xs={12} sm={6} key={r.id}>
              <ResourceCard resource={r} category={categories.find(c => c.id === r.categoryId)} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
