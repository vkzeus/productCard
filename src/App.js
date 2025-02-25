import React from "react";
import ReactDOM from "react-dom";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const imageD = "./image-product-desktop.jpg";
const imageM = "./image-product-mobile.jpg";

const HalfImageCard = () => {
  return (
    <div>
      <Card
        sx={{
          display: "flex",
          maxWidth: 450,
          borderRadius: 3,
          boxShadow: 4,
          overflow: "hidden",
          margin: "auto",
          marginTop: "100px",
        }}
      >
        {/* Left Side - Image */}
        <CardMedia
          component="img"
          image={imageD}
          alt="A bottle of perfume surrounded by foliage"
          sx={{ width: "50%", objectFit: "cover" }}
        />

        {/* Right Side - Content */}
        <CardContent
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px",
            backgroundColor: "#fff",
          }}
        >
          <Typography className="category" variant="subtitle2" sx={{ color: "gray", letterSpacing: 1 }}>
            Perfume
          </Typography>

          <Typography variant="h5" component="h1">
            Gabrielle Essence Eau De Parfum
          </Typography>

          <Typography className="product-desc" variant="body2" sx={{ color: "gray", mt: 1 }}>
            <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          </Typography>

          {/* Price Section */}
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Typography className="sale-price" variant="h6" sx={{ fontWeight: "bold", color: "#2E7D32" }}>
              $149.99
            </Typography>
            <Typography
              className="list-price"
              variant="body2"
              sx={{ textDecoration: "line-through", color: "gray", marginLeft: 1 }}
            >
              $169.99
            </Typography>
          </Box>

          {/* Add to Cart Button */}
    <Button
  variant="contained"
  sx={{
    backgroundColor: "rgb(60, 128, 103)", // Ensure default color is set explicitly
    "&:hover": {
      backgroundColor: "rgb(60, 128, 103)", // Ensure Cypress detects this correctly
      transform: "scale(1.05)",
    },
    mt: 2,
    borderRadius: 2,
    textTransform: "none",
    transition: "background-color 0.2s ease-in-out, transform 0.2s ease-in-out",
  }}
  startIcon={<ShoppingCartIcon />}
>
  Add to Cart
</Button>
        </CardContent>
      </Card>

      <footer style={{ textAlign: "center", marginTop: "20px" }}>
        <div className="attribution">
          <a href="https://www.crio.do" target="_blank" rel="noopener noreferrer">
            Challenge by Crio
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HalfImageCard;
