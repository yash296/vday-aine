'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface ProposalScreenProps {
  onResponse: (response: boolean) => void
}

export default function ProposalScreen({ onResponse }: ProposalScreenProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [noHoverCount, setNoHoverCount] = useState(0)

  const handleNoHover = () => {
    const randomX = (Math.random() - 0.5) * 200
    const randomY = (Math.random() - 0.5) * 200
    setNoButtonPosition({ x: randomX, y: randomY })
    setNoHoverCount((prev) => prev + 1)
  }

  const handleNoClick = () => {
    if (noHoverCount > 3) {
      // After hovering over NO multiple times, it becomes YES
      onResponse(true)
    } else {
      onResponse(false)
    }
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-primary/20 via-secondary/30 to-accent/10 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Fireflies */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`firefly-${i}`}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 3,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Lily field background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`lily-${i}`}
            className="absolute text-4xl opacity-40"
            style={{
              left: `${(i % 5) * 20 + 10}%`,
              top: `${Math.floor(i / 5) * 25 + 20}%`,
            }}
            animate={{ y: [0, 15, 0], rotate: [0, 3, -3, 0] }}
            transition={{
              duration: 2.5 + (i % 3),
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            🌸
          </motion.div>
        ))}
      </div>

      {/* Proposal dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl px-4"
      >
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-primary mb-6 font-light tracking-wide"
        >
          Alright Anie,
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-primary mb-3 text-balance"
        >
          Be My Valentine?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-lg md:text-xl text-primary/70 mb-2 font-light"
        >
          (I promise I won't cramp out on future 10ks)
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-5xl mb-12"
        >
          💜
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex gap-6 flex-wrap justify-center"
        >
          {/* YES Button */}
          <motion.button
            whileHover={{
              scale: 1.12,
              boxShadow: '0 0 60px rgba(102, 51, 153, 0.9)',
            }}
            whileTap={{ scale: 0.92 }}
            onClick={() => onResponse(true)}
            className="px-16 py-6 bg-gradient-to-r from-primary via-accent to-primary text-white font-bold text-2xl rounded-full shadow-xl smooth-transition"
          >
            HECK YES
          </motion.button>

          {/* NO Button - runs away */}
          <motion.button
            animate={{
              x: noButtonPosition.x,
              y: noButtonPosition.y,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            onHoverStart={handleNoHover}
            onClick={handleNoClick}
            className="px-16 py-6 bg-red-300 text-red-950 font-bold text-2xl rounded-full shadow-lg relative smooth-transition hover:shadow-xl hover:bg-red-400"
          >
            {noHoverCount < 2 ? 'ESCAPE' : noHoverCount < 4 ? 'NOPE' : 'HECK YES'}
          </motion.button>
        </motion.div>

        {/* Easter egg messages */}
        {noHoverCount > 0 && noHoverCount < 2 && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 text-primary/60 text-lg"
          >
            Oh you're gonna run from the button too? 😂
          </motion.p>
        )}

        {noHoverCount === 2 && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 text-primary/60 text-lg"
          >
            Same energy as the 10k situation. Button's faster though.
          </motion.p>
        )}

        {noHoverCount >= 3 && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 text-primary/60 text-lg font-semibold"
          >
            Button has surrendered. Accept your fate.
          </motion.p>
        )}
      </motion.div>
    </div>
  )
}
