'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface CelebrationProps {
  onRetry: () => void
}

const Confetti = () => {
  const [height, setHeight] = useState(800)
  useEffect(() => {
    setHeight(window.innerHeight + 100)
  }, [])

  const pieces = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    delay: Math.random() * 0.5,
    duration: 2 + Math.random() * 1,
    x: Math.random() * 100,
    rotation: Math.random() * 720,
  }))

  return (
    <>
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute text-2xl md:text-3xl"
          style={{ left: `${piece.x}%`, top: '-10px' }}
          animate={{
            y: [0, height],
            rotate: [0, piece.rotation],
            opacity: [1, 0],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: 'easeIn',
          }}
        >
          {['💜', '🌸', '✨', '💕'][piece.id % 4]}
        </motion.div>
      ))}
    </>
  )
}

export default function Celebration({ onRetry }: CelebrationProps) {
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowDetails(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-primary via-accent/20 to-primary/20 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Confetti */}
      <Confetti />

      {/* Victory banner */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className="relative z-10 text-center"
      >
        <motion.div
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-7xl md:text-9xl mb-8"
        >
          🎉
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-white mb-2"
        >
          OBJECTIVE: UNLOCKED
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-3xl text-white/80 mb-2 font-light tracking-wide"
        >
          Operation: Aine's Heart
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl text-white/70 mb-8 font-semibold"
        >
          Status: MISSION CRITICAL SUCCESS
        </motion.p>

        {/* Victory animation with lilies */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl mb-8"
        >
          🌸
        </motion.div>
      </motion.div>

      {/* Proposed plan - revealed after celebration */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={showDetails ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mt-12 max-w-2xl w-full px-4"
      >
        <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">Our Valentine's Plan</h2>
          <p className="text-white/60 text-center mb-8 font-light">A night I've been dreaming about...</p>

          <div className="space-y-6 mb-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span className="text-3xl flex-shrink-0">🍽️</span>
              <div>
                <p className="text-xl text-white font-semibold">Brunch Date - Its a surprise</p>
                <p className="text-white/70 text-sm">I'm a terrible cook! We can go out to be safe.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span className="text-3xl flex-shrink-0">🎬</span>
              <div>
                <p className="text-xl text-white font-semibold">Before Sunset</p>
                <p className="text-white/70 text-sm">Part 1 made me believe I needed to do this</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span className="text-3xl flex-shrink-0">🎮</span>
              <div>
                <p className="text-xl text-white font-semibold">Split Finction</p>
                <p className="text-white/70 text-sm">We're playing split fiction on my PS5</p>
              </div>
            </motion.div>



            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span className="text-3xl flex-shrink-0">☕</span>
              <div>
                <p className="text-xl text-white font-semibold">Turtle Match at Home!</p>
                <p className="text-white/70 text-sm">Our ritual</p>
              </div>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(255, 255, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="w-full px-8 py-4 bg-gradient-to-r from-white via-pink-50 to-white text-primary font-bold text-lg rounded-full smooth-transition shadow-xl hover:shadow-2xl"
          >
            Lock in This Date 🔐 💜
          </motion.button>
        </div>
      </motion.div>

      {/* Retry button */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)' }}
        whileTap={{ scale: 0.95 }}
        onClick={onRetry}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="mt-12 px-8 py-3 bg-white/20 text-white font-semibold rounded-full smooth-transition border border-white/30 backdrop-blur-sm hover:bg-white/30 hover:border-white/50 relative z-10"
      >
        Relive the Moment 💭
      </motion.button>
    </div>
  )
}
