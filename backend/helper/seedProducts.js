import Product from "../models/Product.js";


const seedProducts = async () => {
  try {
    // Optional: clear existing products
    await Product.deleteMany();

    const products = [
      { name: "iPhone 14", price: 79999 },
      { name: "Samsung Galaxy S23", price: 74999 },
      { name: "OnePlus 11", price: 56999 },
      { name: "Realme Narzo 60", price: 17999 },
      { name: "Redmi Note 12", price: 14999 }
    ];

    await Product.insertMany(products);

    console.log("Dummy products seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};
export default seedProducts;