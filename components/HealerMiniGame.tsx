'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface HealerMiniGameProps {
  onComplete: () => void
}

interface Heart {
  id: number
  text: string
  x: number
  y: number
}

export default function HealerMiniGame({ onComplete }: HealerMiniGameProps) {
  const [hearts, setHearts] = useState<Heart[]>([
    { id: 1, text: 'Amazing artist', x: 15, y: 20 },
    { id: 2, text: 'Kind soul', x: 85, y: 25 },
    { id: 3, text: 'Shy but powerful', x: 50, y: 65 },
    { id: 4, text: 'Lavender energy', x: 20, y: 75 },
    { id: 5, text: 'Creative mind', x: 75, y: 70 },
  ])

  const [healed, setHealed] = useState<number[]>([])
  const [showVictory, setShowVictory] = useState(false)

  const handleHealHeart = (id: number) => {
    const newHealed = [...healed, id]
    setHealed(newHealed)

    if (newHealed.length === hearts.length) {
      setShowVictory(true)
      setTimeout(() => {
        onComplete()
      }, 2000)
    }
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-primary/30 via-secondary/40 to-accent/20 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Heal My Heart</h1>
        <p className="text-lg text-primary/60">Click the broken hearts to heal them with compliments</p>
      </motion.div>

      <div className="relative w-full max-w-2xl h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border-2 border-primary/40 p-8 shadow-xl overflow-hidden">
        {/* Game arena */}
        {hearts.map((heart) => {
          const isHealed = healed.includes(heart.id)
          return (
            <motion.div
              key={heart.id}
              style={{ left: `${heart.x}%`, top: `${heart.y}%` }}
              animate={isHealed ? { scale: 0, opacity: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
            >
              <motion.button
                onClick={() => handleHealHeart(heart.id)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.8 }}
                className="relative cursor-pointer"
                disabled={isHealed}
              >
                <motion.div
                  animate={!isHealed ? { rotate: [0, 5, -5, 0] } : {}}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="text-4xl"
                >
                  {isHealed ? '✨' : '💔'}
                </motion.div>

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileHover={{ opacity: 1, y: -40 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-2 rounded-lg whitespace-nowrap text-sm font-semibold pointer-events-none"
                >
                  {heart.text}
                </motion.div>
              </motion.button>
            </motion.div>
          )
        })}

        {/* Healing particles */}
        {healed.length > 0 && (
          <>
            {healed.map((id, index) => (
              <motion.div
                key={`heal-particle-${id}-${index}`}
                initial={{
                  x: hearts.find((h) => h.id === id)?.x || 50,
                  y: hearts.find((h) => h.id === id)?.y || 50,
                  opacity: 1,
                }}
                animate={{ y: -100, opacity: 0, scale: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="absolute text-2xl pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
              >
                💜
              </motion.div>
            ))}
          </>
        )}
      </div>

      {/* Progress indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 text-center"
      >
        <p className="text-lg text-primary mb-4">
          Hearts Healed: <span className="font-bold">{healed.length}</span> / {hearts.length}
        </p>
        <div className="w-64 h-3 bg-primary/20 rounded-full overflow-hidden border border-primary/40">
          <motion.div
            animate={{ width: `${(healed.length / hearts.length) * 100}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-gradient-to-r from-primary to-accent"
          />
        </div>
      </motion.div>

      {/* Victory state */}
      {showVictory && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-2xl"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-5xl mb-4">🎉</p>
            <p className="text-2xl font-bold text-white">All Hearts Healed!</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
