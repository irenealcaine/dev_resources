import React from "react";
import { Card, CardContent, Typography, Button, CardActions, Chip, Stack } from "@mui/material";

export default function ResourceCard({ resource, category }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">{resource.title}</Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {resource.description}
        </Typography>

        {/* Categoría */}
        {category && (
          <Typography variant="caption" color="primary" display="block" gutterBottom>
            {category.icon} {category.name}
          </Typography>
        )}

        {/* Tags */}
        <Stack direction="row" spacing={1} style={{ marginBottom: "0.5rem", flexWrap: "wrap" }}>
          {resource.tags.map(tag => (
            <Chip key={tag} label={`#${tag}`} size="small" />
          ))}
        </Stack>

        {/* Gratis / Premium y Rating */}
        <Typography variant="body2" color="textSecondary">
          {resource.isFree ? "Gratis" : "Premium"} · ⭐ {resource.rating}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary" href={resource.url} target="_blank" rel="noreferrer">
          Ir al recurso
        </Button>
      </CardActions>
    </Card>
  );
}
