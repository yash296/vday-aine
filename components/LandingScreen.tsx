'use client'

import { motion } from 'framer-motion'
import FloatingLilies from './FloatingLilies'

interface LandingScreenProps {
  onContinue: () => void
}

export default function LandingScreen({ onContinue }: LandingScreenProps) {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/10 flex flex-col items-center justify-center p-4 overflow-hidden">
      <FloatingLilies />

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-2 text-balance">Operation: Aine's Heart</h1>
        <p className="text-lg md:text-xl text-primary/60 mb-8 font-light tracking-wide">A Risky Heist</p>
        <p className="text-xl md:text-2xl text-primary/70 mb-2">Anannya... My heart needs attention.</p>
        <p className="text-lg md:text-xl text-primary/60">Critical condition. Severe lovesickness.</p>
        <motion.p
          animate={{ y: [0, 5, 0], rotate: [-1, 1, -1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-base md:text-lg text-primary/50 mt-4"
        >
          (Coffee dates, matcha, ramen... I'm addicted to all three. But mostly you.)
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-accent/30 to-primary/20 flex items-center justify-center mb-12 relative z-10 shadow-2xl"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-8xl"
        >
          💜
        </motion.div>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.08, boxShadow: '0 0 50px rgba(102, 51, 153, 0.8)' }}
        whileTap={{ scale: 0.92, rotate: 2 }}
        onClick={onContinue}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="px-12 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold text-lg rounded-full hover:shadow-2xl smooth-transition relative z-10 shadow-xl"
      >
        INITIATE OPERATION
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-12 text-primary/50 text-sm md:text-base text-center relative z-10 tracking-wide"
      >
        For Anie. Valentine's Day Edition.
      </motion.p>
    </div>
  )
}
