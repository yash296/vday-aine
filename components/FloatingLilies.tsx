'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function FloatingLilies() {
  const [height, setHeight] = useState(1000)
  useEffect(() => {
    setHeight(window.innerHeight + 200)
  }, [])

  const lilies = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    delay: i * 0.3,
    duration: 8 + Math.random() * 4,
    x: Math.random() * 100,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden">
      {lilies.map((lily) => (
        <motion.div
          key={lily.id}
          className="absolute text-3xl md:text-5xl"
          style={{ left: `${lily.x}%` }}
          animate={{
            y: [0, height],
            opacity: [0, 1, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: lily.duration,
            delay: lily.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          🌸
        </motion.div>
      ))}

      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: Math.random() * 5,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  )
}
