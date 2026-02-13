# Operation: Sage Heart - Valentine's Proposal Website

A beautiful, interactive romantic proposal website inspired by gaming UI and the film "Before Sunrise."

## Features

### Main Screens
1. **Landing Screen** - Lavender-themed introduction with floating lilies and a compelling headline
2. **About You Section** - Interactive cards showcasing her talents (Art, Fashion, Valorant)
3. **Skill Stats** - Gaming-style character stats panel with animated progress bars
4. **Before Sunrise Tribute** - Cinematic section with sunrise timelapse aesthetic
5. **Proposal Screen** - The big moment with interactive YES/NO buttons
6. **Celebration Screen** - Victory sequence with confetti and the proposed plan

### Interactive Features
- **Easter Eggs**
  - Hover over the guitar in the Valorant card (12% progress joke)
  - Hover over the art card to see "Draw us someday?"
  - NO button runs away when you try to click it (until it becomes YES)
  - Short Queen Mode toggle (scales UI)
  - Heart Healer mini-game for unlocking special content

- **Animations**
  - Falling lily petals with soft sparkles
  - Character stat animations with progress bars
  - Firefly effects in the lily field
  - Confetti explosion on YES response
  - Smooth screen transitions

## Customization Guide

### Personalizing the Content

**Landing Screen** (`components/LandingScreen.tsx`)
```tsx
// Change the headline
<h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 text-balance">
  Your Custom Message Here
</h1>
```

**About Cards** (`components/AboutSection.tsx`)
- Modify the `aboutCards` array to include her actual talents
- Each card has: `id`, `icon`, `title`, `description`, `color`
- Update the emoji in the `icon` field for different visual effects

**Skill Stats** (`components/SkillStats.tsx`)
- Edit the `skills` array with her actual skills and ratings
- Adjust the `value` percentage (0-100) for the progress bars
- Change emojis and descriptions to match her personality

**The Plan** (`components/Celebration.tsx`)
- Customize the three plan items (currently Dinner, Movie, Sunrise Walk)
- Modify the emoji, title, and description for each activity

### Color Theme

The site uses a lavender dreamscape palette defined in `app/globals.css`:
- **Primary**: Lavender (#C8A2C8) - Main purple tone
- **Accent**: Blush pink - For highlights and interactive elements
- **Secondary**: Soft lilac variations - For backgrounds and cards

To change colors, modify the CSS variables in `globals.css`:
```css
--primary: 270 35% 55%;      /* Lavender */
--accent: 330 80% 65%;       /* Blush pink */
--secondary: 270 25% 88%;    /* Soft lilac */
```

### Audio & Sound Effects (Optional)

To add sound effects when buttons are clicked, install `howler.js`:
```bash
npm install howler
```

Then import and use in components:
```tsx
import { Howl } from 'howler'
const sound = new Howl({ src: ['/path/to/sound.mp3'] })
sound.play()
```

### Adding Custom Backgrounds

Images can be added to `public/` folder and referenced in CSS backgrounds:
```tsx
className="bg-cover bg-center" 
style={{ backgroundImage: 'url(/your-image.jpg)' }}
```

## Tech Stack

- **Next.js 16** - React framework with App Router
- **Framer Motion** - Smooth animations and transitions
- **Tailwind CSS** - Utility-first styling with custom lavender theme
- **TypeScript** - Type-safe components and props

## Dependencies

These should be automatically installed:
- `framer-motion` - Animation library (^11.0.0+)
- `tailwindcss-animate` - Animation utilities

## Deployment

Deploy to Vercel with one click:
1. Install the code locally or fork to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy automatically on every push

## Tips for Maximum Impact

1. **Record Her Reaction** - Film her responding to create a special memory
2. **Add Personal Touches** - Include inside jokes in the text
3. **Practice the Moment** - Know when to show her (sunrise would be perfect!)
4. **Custom Music** - Add lo-fi music in the background during the proposal screen
5. **Dress Up** - The site deserves a special presentation
6. **Have a Ring Ready** - If you're planning to propose!

## Troubleshooting

**Animations not smooth?**
- Check if you're using a modern browser (Chrome, Firefox, Safari, Edge)
- Disable browser extensions that might affect animations

**Colors look different?**
- Clear browser cache (Cmd/Ctrl + Shift + R)
- Check color calibration on your screen

**NO button not working?**
- This is intentional! It's part of the charm. Keep hovering over it.

## Special Touches

The website includes several romantic and gaming-inspired details:
- Valorant agent references with Sage (for healing/comfort theme)
- Before Sunrise film callbacks and cinematography
- Lavender as her favorite color incorporated throughout
- Gaming UI aesthetics mixed with romantic design
- Easter eggs for personality and humor

---

Made with love for your special person. Good luck! 💜
