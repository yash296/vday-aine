'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function GuitarEasterEgg() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handleGuitarHover = () => {
    setIsPlaying(true)
    setTimeout(() => setIsPlaying(false), 2000)
  }

  return (
    <motion.div
      onHoverStart={handleGuitarHover}
      whileHover={{ rotate: 5 }}
      className="cursor-pointer"
    >
      <motion.div
        animate={isPlaying ? { x: [0, 5, -5, 0] } : {}}
        transition={{ duration: 0.1, repeat: 10 }}
        className="text-4xl"
      >
        🎸
      </motion.div>
      {isPlaying && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-xs text-primary/60 text-center mt-1"
        >
          Practicing: 12%
        </motion.p>
      )}
    </motion.div>
  )
}

export function HeightToggle() {
  const [isShortMode, setIsShortMode] = useState(false)

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsShortMode(!isShortMode)}
      className="px-4 py-2 bg-primary/20 text-primary border border-primary/40 rounded-lg text-sm hover:bg-primary/30 transition-colors"
    >
      {isShortMode ? 'Normal Mode' : 'Short Queen Mode'} 👑
    </motion.button>
  )
}

export function DrawingPrompt() {
  const [showPrompt, setShowPrompt] = useState(false)

  return (
    <motion.div
      className="cursor-pointer"
      onHoverStart={() => setShowPrompt(true)}
      onHoverEnd={() => setShowPrompt(false)}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="text-4xl"
      >
        🎨
      </motion.div>
      {showPrompt && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-primary/60 whitespace-nowrap mt-1"
        >
          Draw us someday? 🥺
        </motion.p>
      )}
    </motion.div>
  )
}

export function HeartHealerMiniGame() {
  const [hearts, setHearts] = useState([
    { id: 1, text: 'Amazing artist', x: 10, y: 20 },
    { id: 2, text: 'Kind soul', x: 80, y: 30 },
    { id: 3, text: 'Shy but powerful', x: 50, y: 70 },
    { id: 4, text: 'Lavender energy', x: 20, y: 60 },
  ])

  const [healed, setHealed] = useState<number[]>([])

  const handleHealHeart = (id: number) => {
    setHealed([...healed, id])
    if (healed.length === hearts.length - 1) {
      setTimeout(() => {
        alert('All hearts healed! Ready for the proposal?')
      }, 500)
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <h3 className="text-2xl font-bold text-primary mb-4 text-center">Heal My Heart</h3>
      <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 h-96 border-2 border-primary/30">
        {hearts.map((heart) => {
          const isHealed = healed.includes(heart.id)
          return (
            <motion.button
              key={heart.id}
              style={{ left: `${heart.x}%`, top: `${heart.y}%` }}
              animate={isHealed ? { scale: 0, opacity: 0 } : {}}
              transition={{ duration: 0.5 }}
              onClick={() => handleHealHeart(heart.id)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="absolute text-2xl cursor-pointer hover:text-3xl transition-all"
            >
              {isHealed ? '' : '💔'}
            </motion.button>
          )
        })}

        {healed.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            {healed.map((id) => (
              <motion.div
                key={`heal-${id}`}
                animate={{ y: [0, -100], opacity: [1, 0] }}
                transition={{ duration: 1 }}
                className="absolute text-2xl"
              >
                💜
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
      <p className="text-center text-primary/60 text-sm mt-4">
        Click on the broken hearts to heal them
      </p>
    </div>
  )
}
