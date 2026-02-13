'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LandingScreen from '@/components/LandingScreen'
import AboutSection from '@/components/AboutSection'
import SkillStats from '@/components/SkillStats'
import BeforeSunriseSection from '@/components/BeforeSunriseSection'
import ProposalScreen from '@/components/ProposalScreen'
import Celebration from '@/components/Celebration'

type Screen = 'landing' | 'about' | 'skills' | 'sunrise' | 'proposal' | 'yes' | 'no'

export default function Page() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing')

  const handleContinue = (nextScreen: Screen) => {
    setCurrentScreen(nextScreen)
  }

  const handleProposalResponse = (response: boolean) => {
    if (response) {
      setCurrentScreen('yes')
    } else {
      setCurrentScreen('no')
    }
  }

  const handleRetry = () => {
    setCurrentScreen('proposal')
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {currentScreen === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <LandingScreen onContinue={() => handleContinue('about')} />
          </motion.div>
        )}

        {currentScreen === 'about' && (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <AboutSection onContinue={() => handleContinue('skills')} />
          </motion.div>
        )}

        {currentScreen === 'skills' && (
          <motion.div
            key="skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <SkillStats onContinue={() => handleContinue('sunrise')} />
          </motion.div>
        )}

        {currentScreen === 'sunrise' && (
          <motion.div
            key="sunrise"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <BeforeSunriseSection onContinue={() => handleContinue('proposal')} />
          </motion.div>
        )}

        {currentScreen === 'proposal' && (
          <motion.div
            key="proposal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            <ProposalScreen onResponse={handleProposalResponse} />
          </motion.div>
        )}

        {currentScreen === 'yes' && (
          <motion.div
            key="yes"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Celebration onRetry={handleRetry} />
          </motion.div>
        )}

        {currentScreen === 'no' && (
          <motion.div
            key="no"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full min-h-screen bg-gradient-to-br from-red-900 via-primary to-red-800 flex flex-col items-center justify-center p-4">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 0.5,
                  repeat: 3,
                  repeatDelay: 0.3,
                }}
              >
                <div className="text-6xl mb-8">🚨</div>
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">System Error Detected</h1>
              <p className="text-xl text-white/80 mb-2 text-center">Clove tried to revive your decision...</p>
              <p className="text-lg text-white/70 mb-8 text-center">Failed. Please try again.</p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRetry}
                className="px-8 py-4 bg-white text-red-900 font-bold text-lg rounded-lg hover:bg-red-50 transition-colors"
              >
                Retry Decision
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
