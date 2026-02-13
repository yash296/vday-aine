'use client'

import { motion } from 'framer-motion'

interface BeforeSunriseSectionProps {
  onContinue: () => void
}

export default function BeforeSunriseSection({ onContinue }: BeforeSunriseSectionProps) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-orange-400/30 via-pink-300/20 to-primary/20 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Sunrise gradient background */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-gradient-to-b from-yellow-200/40 via-orange-300/20 to-transparent"
        />

        {/* Sun circle */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3, ease: 'easeOut' }}
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-b from-yellow-300 to-orange-400 rounded-full blur-2xl"
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center max-w-2xl"
      >
        <motion.div 
          animate={{ scale: [1, 1.1, 1], y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-6xl md:text-8xl mb-8"
        >
          🌅
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mb-8"
        >
          <p className="text-2xl md:text-3xl text-primary/80 mb-6 leading-relaxed font-light">
            So like... <span className="font-semibold text-primary">Before Sunrise</span> is a vibe.
          </p>
          <p className="text-lg md:text-xl text-primary/70 leading-relaxed mb-6">
            Two people, one night, talking about everything. We do that already. Coffee in your hand, ramen on the table, just us talking for hours. That's my favorite thing.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg md:text-xl text-primary/60 mb-4 font-light"
        >
          But yeah... you walked in, and now I'm here trying to be smooth about it.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-base md:text-lg text-primary/50 mb-12"
        >
          So... here goes nothing. This is real.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(200, 162, 200, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="px-10 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg rounded-full smooth-transition shadow-lg"
        >
          Ask Her Now →
        </motion.button>
      </motion.div>
    </div>
  )
}
