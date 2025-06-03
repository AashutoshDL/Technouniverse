"use client"

import { useState } from "react"
import Card from "./card"

const products = [
  {
    id: 1,
    title: "AR Development Kit",
    description: "Advanced augmented reality development toolkit for immersive experiences",
    price: 299.99,
    imageUrl: "/shiba.png",
  },
  {
    id: 2,
    title: "3D Modeling Software",
    description: "Professional-grade 3D modeling software for digital transformation projects",
    price: 199.99,
    imageUrl: "/shiba.png",
  },
  {
    id: 3,
    title: "Tech Innovation Course",
    description: "Online course teaching cutting-edge technology innovation principles",
    price: 89.99,
    imageUrl: "/shiba.png",
  },
  {
    id: 4,
    title: "Smart Development Hub",
    description: "All-in-one development environment for future-ready applications",
    price: 149.99,
    imageUrl: "/shiba.png",
  },
]

export default function E_com() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleBuy = (id: number) => {
    console.log(`Buying product ${id}`)
  }

  const handleAddToCart = (id: number) => {
    console.log(`Adding product ${id} to cart`)
  }

  // Filter products based on search term (case-insensitive)
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Products</h1>
      
      {/* Search Bar */}
      <div className="mb-10 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              onBuy={() => handleBuy(product.id)}
              onAddToCart={() => handleAddToCart(product.id)}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  )
}
