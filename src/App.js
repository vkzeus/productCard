import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import imageD from "./image-product-desktop.jpg";
import imageM from "./image-product-mobile.jpg";
const HalfImageCard = () => {
  return (
    <div>
      {/* Main Card */}
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
          alt="A bottle of perfume surrounded by foliage."
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
            PERFUME
          </Typography>

          <h1>Gabrielle Essence Eau De Parfum.</h1>

          <p className="product-desc">
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
          </p>

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
            color="success"
            startIcon={<ShoppingCartIcon />}
            sx={{
              "&:hover": {
                backgroundColor: "rgb(60, 128, 103)",
                transform: "scale(1.05)",
              },
              mt: 2,
              borderRadius: 2,
              textTransform: "none",
            }}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>

      {/* Footer Section */}
      <footer style={{ textAlign: "center", marginTop: "20px" }}>
        <div className="attribution">
          <a href="https://www.crio.do" target="_blank" rel="noopener noreferrer">
            Powered by Crio
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HalfImageCard;
