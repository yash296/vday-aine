'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface SkillStatsProps {
  onContinue: () => void
}

const skills = [
  { name: 'Drawing Skills', rating: 'Illegal Talent', emoji: '🎨', value: 100 },
  { name: 'Fashion Game', rating: 'I Look Like Potato', emoji: '👗', value: 998 },
  { name: 'Clutch Factor', rating: 'Sage Main Energy', emoji: '🎮', value: 95 },
  { name: 'Coffee Addiction', rating: 'Professional Level', emoji: '☕', value: 99 },
  { name: 'Ramen Expertise', rating: 'Taste Bud Destroyer', emoji: '🍜', value: 97 },
  { name: 'Making Me Smile', rating: 'Permanent Smiles', emoji: '😊', value: 120 },
  { name: 'Running Speed', rating: 'I Quit at 2 Miles', emoji: '🏃', value: 92 },
  { name: 'Roasting Me', rating: 'Fairly Accurate', emoji: '🔥', value: 85 },
  { name: 'Looking Good', rating: 'Annoying Honestly', emoji: '✨', value: 1000 },
  { name: 'Taking Over My Mind', rating: 'Mission Success', emoji: '💜', value: 9999 },
]

export default function SkillStats({ onContinue }: SkillStatsProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-background via-secondary/50 to-background p-4 md:p-8 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl md:text-6xl mb-4"
        >
          📊
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">STAT BREAKDOWN</h2>
        <p className="text-lg text-primary/60 font-light">Systems Analysis: Why she's cracked</p>
      </motion.div>

      <div className="w-full max-w-3xl">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/30 border-2 border-primary/30 rounded-xl p-8 backdrop-blur-sm">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="mb-8 last:mb-0"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.emoji}</span>
                  <div>
                    <p className="font-bold text-primary text-lg">{skill.name}</p>
                    <p className="text-sm text-primary/60">{skill.rating}</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-primary">{skill.value}%</span>
              </div>

              <div className="w-full bg-primary/10 rounded-full h-3 overflow-hidden border border-primary/20">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.value}%` }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                />
              </div>

              {skill.name === 'Looking Good' && hoveredSkill === skill.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-primary/70 italic font-semibold"
                >
                  Honestly unfair to the rest of us.
                </motion.p>
              )}
              {skill.name === 'Running Speed' && hoveredSkill === skill.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-primary/70 italic"
                >
                  You were crushing the 10k while I died inside.
                </motion.p>
              )}
              {skill.name === 'Taking Over My Mind' && hoveredSkill === skill.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-primary/70 italic font-semibold"
                >
                  Yeah, that's definitely over 9000.
                </motion.p>
              )}
              {skill.name === 'Coffee Addiction' && hoveredSkill === skill.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-primary/70 italic"
                >
                  I've started buying coffee in bulk. For you.
                </motion.p>
              )}
              {skill.name === 'Ramen Expertise' && hoveredSkill === skill.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-primary/70 italic font-semibold"
                >
                  Those ramen nights with you are my favorite thing.
                </motion.p>
              )}
              {skill.name === 'Match Gaming' && hoveredSkill === skill.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-primary/70 italic"
                >
                  I don't mind losing to you. Actually kind of love it.
                </motion.p>
              )}
              {skill.name === 'Roasting Me' && hoveredSkill === skill.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-primary/70 italic"
                >
                  You know me too well at this point.
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(200, 162, 200, 0.5)' }}
        whileTap={{ scale: 0.95 }}
        onClick={onContinue}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 px-10 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg rounded-full smooth-transition shadow-lg"
      >
        Next Chapter →
      </motion.button>
    </div>
  )
}
