"use client"

import { Button } from "@/components/ui/button"
import { Star, Users, Plus, Play } from "lucide-react"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export default function StarCardsGlassmorphism() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Generate initial particles
    const initialParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    }))
    setParticles(initialParticles)

    // Animate particles
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          x: (particle.x + particle.speedX + 100) % 100,
          y: (particle.y + particle.speedY + 100) % 100,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 animate-gradient-shift" />

      {/* Secondary animated layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-800/20 to-blue-800/20 animate-pulse-slow" />

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            filter: "blur(0.5px)",
          }}
        />
      ))}

      {/* Light flares */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-float-delayed" />
      <div className="absolute top-2/3 left-1/3 w-20 h-20 bg-white/5 rounded-full blur-xl animate-float-slow" />

      {/* Balance indicator - top right */}
      <div className="absolute top-8 right-6 z-20">
        <div className="flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
          <span className="text-white font-semibold text-lg tracking-wide">1,250</span>
        </div>
      </div>

      {/* Main glass panel */}
      <div className="flex items-center justify-center min-h-screen px-6">
        <div className="w-full max-w-sm">
          {/* Central glass panel */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-500">
            {/* Logo */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white tracking-wider drop-shadow-lg">StarCards</h1>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mt-4" />
            </div>

            {/* Menu buttons */}
            <div className="space-y-4">
              {/* Play button */}
              <Button className="w-full h-14 text-lg font-medium backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="tracking-wide">Играть</span>
              </Button>

              {/* Create lobby button */}
              <Button className="w-full h-14 text-lg font-medium backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                <Plus className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="tracking-wide">Создать лобби</span>
              </Button>

              {/* Friends button */}
              <Button className="w-full h-14 text-lg font-medium backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                <Users className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="tracking-wide">Друзья</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
