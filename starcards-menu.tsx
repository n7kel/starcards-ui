"use client"

import { Button } from "@/components/ui/button"
import { Star, Users, Plus, Gamepad2 } from "lucide-react"

export default function StarCardsMenu() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 relative overflow-hidden">
      {/* Poker table texture overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(0,0,0,0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, rgba(0,0,0,0.1) 1px, transparent 1px),
            radial-gradient(circle at 40% 80%, rgba(0,0,0,0.05) 2px, transparent 2px),
            linear-gradient(45deg, rgba(0,0,0,0.02) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(0,0,0,0.02) 25%, transparent 25%)
          `,
          backgroundSize: "50px 50px, 80px 80px, 30px 30px, 20px 20px, 20px 20px",
        }}
      />

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />

      {/* Gold star counter - top right */}
      <div className="absolute top-6 right-6 z-10">
        <Button
          variant="ghost"
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-black font-bold px-4 py-2 rounded-full shadow-lg border-2 border-yellow-300 transition-all duration-200 hover:scale-105"
        >
          <Star className="w-5 h-5 mr-2 fill-current" />
          <span className="text-lg">1,250</span>
        </Button>
      </div>

      {/* Main content container */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 relative z-10">
        {/* Large star logo with StarCards text */}
        <div className="mb-16 relative">
          <div className="relative w-48 h-48 flex items-center justify-center">
            {/* Star shape background */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                clipPath:
                  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                background: "linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))",
              }}
            />
            {/* StarCards text */}
            <div className="text-center z-10">
              <h1 className="text-4xl font-bold text-white/80 tracking-wider" style={{ fontFamily: "serif" }}>
                StarCards
              </h1>
            </div>
          </div>
        </div>

        {/* Main menu buttons */}
        <div className="w-full max-w-sm space-y-6">
          {/* Primary button - Play with random user */}
          <Button className="w-full h-16 text-lg font-semibold bg-gradient-to-b from-emerald-500 to-emerald-700 hover:from-emerald-400 hover:to-emerald-600 text-white shadow-xl border-b-4 border-emerald-800 hover:border-emerald-700 active:border-emerald-900 active:translate-y-1 transition-all duration-150 rounded-xl">
            <Gamepad2 className="w-6 h-6 mr-3" />
            Играть со случайным пользователем
          </Button>

          {/* Secondary button - Create lobby */}
          <Button
            variant="outline"
            className="w-full h-16 text-lg font-semibold bg-gradient-to-b from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white border-blue-400 shadow-xl border-b-4 border-blue-900 hover:border-blue-800 active:border-blue-950 active:translate-y-1 transition-all duration-150 rounded-xl"
          >
            <Plus className="w-6 h-6 mr-3" />
            Создать лобби
          </Button>

          {/* Tertiary button - Friends */}
          <Button
            variant="secondary"
            className="w-full h-16 text-lg font-semibold bg-gradient-to-b from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white shadow-xl border-b-4 border-purple-900 hover:border-purple-800 active:border-purple-950 active:translate-y-1 transition-all duration-150 rounded-xl"
          >
            <Users className="w-6 h-6 mr-3" />
            Друзья
          </Button>
        </div>
      </div>

      {/* Ambient lighting effects */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-yellow-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/5 rounded-full blur-2xl" />
    </div>
  )
}
