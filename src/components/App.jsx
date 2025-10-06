import React, { useState, useEffect } from "react";
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
  Grow,
} from "@mui/material";
import ResourceCard from "./ResourceCard";
import { supabase } from "../../supabaseClient";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    secondary: { main: "#f48fb1" },
    background: { default: "#121212", paper: "#1e1e1e" },
  },
});

export default function App() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [resources, setResources] = useState([]);

  // Cargar datos desde Supabase
  useEffect(() => {
    const fetchData = async () => {
      const { data: categoriesData } = await supabase.from("categories").select("*");
      const { data: subcategoriesData } = await supabase.from("subcategories").select("*");
      const { data: resourcesData } = await supabase.from("resources").select("*");

      setCategories(categoriesData || []);
      setSubcategories(subcategoriesData || []);
      setResources(resourcesData || []);

      console.log({ categoriesData, subcategoriesData, resourcesData })
    };

    fetchData();
  }, []);

  // Filtrado global de recursos según buscador
  const filteredResources = resources.filter(r =>
    (r.title + r.description).toLowerCase().includes(query.toLowerCase())
  );

  // Detectar categoría visible con IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id.replace("category-", ""));
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    categories.forEach(c => {
      const el = document.getElementById(`category-${c.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      {/* Sidebar */}
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
                color={activeCategory === c.id ? "secondary" : "primary"}
                onClick={() => {
                  document.getElementById(`category-${c.id}`)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                 {c.icon}
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
          {categories.map(category => {
            const subcats = subcategories.filter(sc => sc.categoryId === category.id);

            // Subcategorías con recursos visibles
            const subcatsWithResources = subcats.filter(subcat =>
              filteredResources.some(r => r.categoryId === category.id && r.subcategoryId === subcat.id)
            );

            if (!subcatsWithResources.length) return null;

            return (
              <div key={category.id}>
                <Typography variant="h5" gutterBottom id={`category-${category.id}`}>
                  
                  {category.icon} {category.name}
                </Typography>
                <Divider sx={{ marginBottom: "1rem" }} />

                {subcatsWithResources.map(subcat => {
                  const resInSubcat = filteredResources.filter(
                    r => r.categoryId === category.id && r.subcategoryId === subcat.id
                  );

                  return (
                    <div
                      key={subcat.id}
                      style={{
                        marginBottom: "2rem",
                        padding: "1rem",
                      }}
                    >
                      <Typography variant="h6" gutterBottom>
                        {subcat.name}
                      </Typography>
                      <Grow in={true} timeout={500}>
                        <div>
                          <Grid container spacing={2}>
                            {resInSubcat.map(r => (
                              <Grid item xs={12} sm={6} key={r.id}>
                                <ResourceCard resource={r} category={category} subcategory={subcat} />
                              </Grid>
                            ))}
                          </Grid>
                        </div>
                      </Grow>
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
