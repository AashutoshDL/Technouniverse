"use client"
import Image from "next/image"
import { ArrowRight, ShoppingBag } from "lucide-react"

interface CardProps {
  title: string
  description: string
  price: number
  imageUrl: string
  onBuy: () => void
  onAddToCart: () => void
}

export default function Card({ title, description, price, imageUrl, onBuy, onAddToCart }: CardProps) {
  return (
    <div className="group relative border-0 rounded-2xl p-0 m-3 max-w-sm bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden backdrop-blur-sm">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      {/* Image container with overlay */}
      <div className="relative w-full h-64 overflow-hidden rounded-t-2xl bg-gradient-to-br from-gray-100 to-gray-200">
        <Image 
          src={imageUrl || "/placeholder.svg?height=256&width=384"} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating price badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          ${price.toFixed(2)}
        </div>
      </div>

      {/* Content section */}
      <div className="p-6 relative z-10">
        <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-black transition-colors duration-300 leading-tight">
          {title}
        </h2>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          {description}
        </p>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            onClick={onBuy}
            className="flex-1 bg-gradient-to-r from-gray-900 to-black text-white py-3 px-6 rounded-xl hover:from-black hover:to-gray-800 transition-all duration-300 flex items-center justify-center font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Buy Now
          </button>
          <button
            onClick={onAddToCart}
            className="flex-1 bg-white/80 backdrop-blur-sm text-gray-900 py-3 px-6 rounded-xl border border-gray-200 hover:bg-white hover:border-gray-300 transition-all duration-300 flex items-center justify-center gap-2 font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] group/btn"
          >
            <ShoppingBag size={16} className="transition-transform duration-300 group-hover/btn:rotate-12" />
            Add to Cart
            <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Subtle border glow */}
      <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
    </div>
  )
}