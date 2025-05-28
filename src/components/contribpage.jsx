import React, { useRef, useEffect } from 'react'
import styles from './styles/contrib.module.css'
import { contributors } from '../Data/data';
import Card from './Card/card';
import { motion,useScroll } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ReactLenis from 'lenis/react';

const ContribPage = () => { // Renamed to PascalCase
  const lenisRef = useRef();

  useEffect(() =>{
    let rafId; // Declare rafId here to be accessible in both update and cleanup
    function update(time) {
      lenisRef.current?.lenis?.raf(time);
      rafId = requestAnimationFrame(update); // Re-schedule for the next frame
    }
    // Start the loop
    rafId = requestAnimationFrame(update); 
    // Cleanup function to cancel the animation frame when the component unmounts
    return () => cancelAnimationFrame(rafId); 
  }, []) // Empty dependency array ensures this runs only once on mount and cleans up on unmount

  const Navigate=useNavigate();
  const container= useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })
  const tohome= ()=> {
    Navigate('/');
  }
  return (
    <>
    <ReactLenis root options={{autoRaf: false}} ref={lenisRef} />
      <main ref={container} className={styles.main}>
        {/* Moved onClick to the div, changed class to className, and SVG attributes to camelCase */}
        <div className={styles.back} onClick={tohome}> 
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="10 0 512 512">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M249.38 336L170 256l79.38-80M181.03 256H342"/>
            <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
          </svg>
        </div>
          {
            contributors.map((contrib, i) =>{
              const numCards = contributors.length;

              // Calculate targetScale:
              // Last card (i = numCards - 1) will have scale 1.
              // First card (i = 0, "deepest" in stack) will be smallest.
              const scaleDecrementPerCard = 0.04; // Adjust for more/less aggressive scaling
              const cardsBehind = numCards - 1 - i; // 0 for the last card, numCards-1 for the first
              const targetscale = Math.max(0.15, 1 - (cardsBehind * scaleDecrementPerCard)); // Min scale 0.15

              // Calculate range for the scale animation of this card
              const rangeStartFactor = 0.04; // Ensures (numCards-1)*factor < 1 for valid range
              const animationRange = [i * rangeStartFactor, 1];

              return <Card key={i} i={i} {...contrib} progress={scrollYProgress} range={animationRange} targetScale={targetscale} numCards={numCards} rangeStartFactor={rangeStartFactor} />
            })
          }

        </main>
          </>
  )
}

export default ContribPage; // Updated export