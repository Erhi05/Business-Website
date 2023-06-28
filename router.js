const router = new Navigo();

router
  .on("/product.html", () => {
    // Handle the product page route
    // You can use JavaScript to show/hide the appropriate content
    console.log("Product page");
  })
  // Add more routes for other pages
  .resolve();
