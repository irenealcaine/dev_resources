import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Typography,
  TextField,
  Grid,
  Divider,
  Stack,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import ResourceCard from "./ResourceCard";
import { resources, categories, subcategories } from "../data/examples";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    background: { default: "#121212", paper: "#1e1e1e" },
  },
});

export default function App() {
  const [query, setQuery] = useState("");

  // Filtrado global de recursos según buscador
  const filteredResources = resources.filter(r =>
    (r.title + r.description).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      {/* Sidebar con iconos de categorías */}
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: 16,
          transform: "translateY(-50%)",
          zIndex: 1000,
        }}
      >
        <Stack spacing={2}>
          {categories.map(c => (
            <Tooltip key={c.id} title={c.name} placement="right">
              <IconButton
                color="primary"
                onClick={() => {
                  document.getElementById(`category-${c.id}`)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{c.icon}</span>
              </IconButton>
            </Tooltip>
          ))}
        </Stack>
      </Box>

      {/* Contenido principal */}
      <Container maxWidth="md" sx={{ paddingLeft: "80px", paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Typography variant="h4" gutterBottom>
          Recursos para desarrolladores
        </Typography>

        {/* Buscador */}
        <TextField
          fullWidth
          label="Buscar..."
          variant="outlined"
          value={query}
          onChange={e => setQuery(e.target.value)}
          sx={{ marginBottom: "2rem" }}
        />

        <Stack spacing={4}>
          {/* Recorrer categorías */}
          {categories.map(category => {
            const subcats = subcategories.filter(sc => sc.categoryId === category.id);

            // Subcategorías que tengan recursos visibles
            const subcatsWithResources = subcats.filter(subcat =>
              filteredResources.some(r => r.categoryId === category.id && r.subcategoryId === subcat.id)
            );

            // Si no hay subcategorías con recursos, no mostramos la categoría
            if (!subcatsWithResources.length) return null;

            return (
              <div key={category.id}>
                <Typography variant="h5" gutterBottom id={`category-${category.id}`}>
                  {category.icon} {category.name}
                </Typography>
                <Divider sx={{ marginBottom: "1rem" }} />

                {/* Recorrer subcategorías */}
                {subcatsWithResources.map(subcat => {
                  const resInSubcat = filteredResources.filter(
                    r => r.categoryId === category.id && r.subcategoryId === subcat.id
                  );

                  return (
                    <div key={subcat.id} style={{ marginBottom: "2rem" }}>
                      <Typography variant="h6" gutterBottom>
                        {subcat.name}
                      </Typography>
                      <Grid container spacing={2}>
                        {resInSubcat.map(r => (
                          <Grid item xs={12} sm={6} key={r.id}>
                            <ResourceCard
                              resource={r}
                              category={category}
                              subcategory={subcat}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
