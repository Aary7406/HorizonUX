import React, { useRef } from 'react'
import styles from './card.module.css'
import { motion,useScroll, useTransform } from 'framer-motion'


export default function card({
  i, name, description, image, gradient, progress, range, targetScale,
  numCards, // New prop: total number of cards
  rangeStartFactor // New prop: the factor used to calculate animation start points
}) {
  const container=useRef(null);
  const {scrollYProgress} = useScroll({
      target: container,
      offset: ["start end", "start start"]
      
      })
  const imgscale= useTransform(scrollYProgress,[0,1],[0.5,1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  const stackoffset = 15; // Pixels: Vertical offset for each subsequent card in the stack
  const topPos = i * stackoffset;

  // --- Dynamic top for less intense stickiness ---
  // STICKY_DRIFT_RATE_VH determines how much the card's 'top' sticky position
  // will change (in vh units) as the main page scroll 'progress' goes from 0 to 1.
  // A value of 0.5 means it will drift down by 0.5vh over the entire scroll.
  // Adjust this value to control the "intensity" of the stickiness.
  // Higher value = more drift = less intensely sticky.
  const STICKY_DRIFT_RATE_VH = 0.3; // Example: card drifts 0.3vh for full page scroll
  const dynamicTop = useTransform(progress, (currentProgress) => {
    return `calc( (${currentProgress * STICKY_DRIFT_RATE_VH} - 5)vh + ${topPos}px )`;
  });

  // --- Logic for unsticking and scrolling ---
  const CARDS_TO_KEEP_STICKY = 2; // How many cards at the top of the stack remain fully sticky
  let y = 0; // Default translateY, Framer Motion's shorthand for translateY

  // Only cards that are NOT among the last `CARDS_TO_KEEP_STICKY` should unstick
  if (i < numCards - CARDS_TO_KEEP_STICKY) {
    // This card 'i' should start unsticking when card 'i + CARDS_TO_KEEP_STICKY'
    // becomes the primary sticky card. This happens when `progress` (main scrollYProgress)
    // is around `(i + CARDS_TO_KEEP_STICKY) * rangeStartFactor`.
    const unstickTriggerStartScrollValue = (i + CARDS_TO_KEEP_STICKY) * rangeStartFactor;
    
    // Duration of the unstick animation in terms of scroll progress.
    // Let's make it proportional to how long a few cards take to scroll into place.
    const unstickAnimationScrollDuration = rangeStartFactor * (CARDS_TO_KEEP_STICKY + 1);

    // Ensure the animation doesn't try to start or end beyond the 0-1 scroll progress range
    const actualUnstickTriggerStart = Math.min(unstickTriggerStartScrollValue, 1 - unstickAnimationScrollDuration);
    const actualUnstickAnimationEnd = Math.min(actualUnstickTriggerStart + unstickAnimationScrollDuration, 1);
    
    // Define how far up the card should move when unsticking
    const unstickMoveDistance = typeof window !== 'undefined' ? -window.innerHeight * 1.2 : -1000; // Move up 1.2x viewport height

    y = useTransform(
      progress, // Main scrollYProgress from the parent
      [0, actualUnstickTriggerStart, actualUnstickAnimationEnd, 1],
      [0, 0, unstickMoveDistance, unstickMoveDistance]
      // Stays at y=0 until trigger, then moves to unstickMoveDistance, then stays there
    );
  }

  return (
    <motion.div ref={container} className={styles.cardcont} style={{scale, top: dynamicTop, y }}>
        <div className={styles.card}>
            <h1 className={styles.name}>
                <p>{name}</p>
            </h1>
            <div className={styles.pfp}>
             <div className={styles.desc}>
                <p>{description}</p>
             </div>
             <div className={styles.imgcont}>
              <motion.div style={{scale: imgscale}} className={styles.img}>
                <img src={image} alt={name} />
              </motion.div>
             </div>
            </div>
            
        </div>
    </motion.div>
  )
}
