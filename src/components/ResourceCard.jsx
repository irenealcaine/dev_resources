import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

export default function ResourceCard({ resource, category, subcategory }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">{resource.title}</Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {resource.description}
        </Typography>
      </CardContent>

      <Button size="small" color="primary" href={resource.url} target="_blank" rel="noreferrer">
        Ir al recurso
      </Button>
    </Card>
  );
}
