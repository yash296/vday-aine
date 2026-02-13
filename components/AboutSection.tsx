'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { GuitarEasterEgg, DrawingPrompt } from './EasterEggs'

interface AboutSectionProps {
  onContinue: () => void
}

const aboutCards = [
  {
    id: 'art',
    icon: '🎨',
    title: 'Artistic Genius',
    description: 'Draws things that make me lose my mind. In the best way.',
    color: 'from-primary/20 to-accent/20',
  },
  {
    id: 'fashion',
    icon: '👗',
    title: 'Fashion Architect',
    description: 'Makes fashion look effortless. I cannot compete.',
    color: 'from-primary/20 to-accent/15',
  },
  {
    id: 'valorant',
    icon: '🎮',
    title: 'Sage Main',
    description: 'Saves teammates. Saves my sanity. Probably gonna save my life.',
    color: 'from-accent/20 to-primary/20',
  },
  {
    id: 'running',
    icon: '🏃',
    title: 'Runner Athlete',
    description: 'Can do a 10k. I cannot. New personal record: 2 miles before cramping.',
    color: 'from-accent/15 to-primary/20',
  },
  {
    id: 'coffee',
    icon: '☕',
    title: 'Coffee Connoisseur',
    description: 'Refuses to leave home without it. Same energy as a Valorant main without abilities.',
    color: 'from-primary/20 to-accent/15',
  },
  {
    id: 'ramen',
    icon: '🍜',
    title: 'Ramen Enthusiast',
    description: 'Our best dates revolve around finding the perfect bowl. I\'m not complaining.',
    color: 'from-accent/15 to-primary/20',
  },
  {
    id: 'matcha',
    icon: '🍵',
    title: 'Matcha Baker',
    description: "Best cookies I've had in a while. I'm not complaining.",
    color: 'from-primary/20 to-accent/20',
  },
]

export default function AboutSection({ onContinue }: AboutSectionProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-background via-secondary/50 to-background p-4 md:p-8 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">DOSSIER: Anannya</h2>
        <p className="text-lg text-primary/60 font-light tracking-wide">What makes her dangerously amazing</p>
      </motion.div>

      <div className="w-full max-w-2xl grid gap-6 md:gap-8 mb-12">
        {aboutCards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
            className={`bg-gradient-to-br ${card.color} border-2 border-primary/30 rounded-xl p-6 md:p-8 cursor-pointer backdrop-blur-sm hover:border-primary/60 transition-all`}
          >
            <div className="flex items-start gap-4 md:gap-6">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-5xl md:text-6xl flex-shrink-0"
              >
                {card.icon}
              </motion.div>

              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{card.title}</h3>
                <p className="text-base md:text-lg text-primary/70">{card.description}</p>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: expandedCard === card.id ? 1 : 0,
                    height: expandedCard === card.id ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pt-4 border-t border-primary/20"
                >
                  {card.id === 'art' && (
                    <div className="space-y-3">
                      <p className="text-primary/60">Honestly, your sketches make me question my life choices. Why can't I draw like that?</p>
                      <div className="flex justify-center pt-2">
                        <DrawingPrompt />
                      </div>
                    </div>
                  )}
                  {card.id === 'fashion' && (
                    <p className="text-primary/60">Meanwhile I'm wearing the same hoodie for 3 days straight. Your fashion game is undefeated.</p>
                  )}
                  {card.id === 'valorant' && (
                    <div className="space-y-3">
                      <p className="text-primary/60">You're actually cracked at Valorant. I watched you clutch a 1v4 last week. I was in awe.</p>
                      <div className="flex justify-center pt-2">
                        <GuitarEasterEgg />
                      </div>
                    </div>
                  )}
                  {card.id === 'running' && (
                    <p className="text-primary/60">You crushed that 10k. I made it 2 miles before my legs started screaming. We'll finish one together someday.</p>
                  )}
                  {card.id === 'coffee' && (
                    <p className="text-primary/60">I've learned to always have coffee ready when you arrive. It's basically your love language at this point.</p>
                  )}
                  {card.id === 'ramen' && (
                    <p className="text-primary/60">Honestly those ramen dates are my favorite memories with you. Just us, good food, and endless conversation about nothing and everything.</p>
                  )}
                  {card.id === 'match' && (
                    <p className="text-primary/60">You destroy me at Match every single time. Yet I keep challenging you. I think I just like seeing you win.</p>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(200, 162, 200, 0.5)' }}
        whileTap={{ scale: 0.95 }}
        onClick={onContinue}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="px-10 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg rounded-full smooth-transition shadow-lg"
      >
        Continue Mission →
      </motion.button>
    </div>
  )
}
