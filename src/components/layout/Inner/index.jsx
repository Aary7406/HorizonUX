import { motion, scale } from "framer-motion";
import styles from "./Inner.module.css"


export default function Inner({children}) {
    const anim = (variants) => {
        return{
            initial: "init",
            animate: "enter",
            exit: "exit",
            variants
        }
    }

    const opacity = {
        init: {
            opacity: 0
        },
        enter: {
            opacity: 1,
            // transition: {
            //     duration: 0.5, // Example duration
            //     ease: "easeInOut"  // Example easing
            // }
        },
        exit: {
            opacity: 0, // Corrected: Element should fade out
            transition: {
                duration: 1, // Example duration
                ease: "easeInOut"
            }
        }
    }

    const slide= {
        init: {
            y:"100vh" // Use transform: translateY for better performance
        },
        enter: {
            y:"100vh", // Stays off-screen during new page enter
            // transition: { // Added transition for consistency
            //     // duration: 0.5,
            //     ease: "easeInOut"
            // }
        },
        exit: {
            y:"0vh", // Animate to cover the screen
            transition: {
                duration: 1.2, // Example duration
                ease: "easeInOut" // Example easing for slide effect
            }
        }
    }

    const perspective= {
        init: {
            y:"0", // Use transform: translateY for better performance
            opacity: 1
        },
        enter: {
            y:"0",
            scale: 1,
            opacity: 1,
            // transition: { // Added transition for consistency
            //     duration: 0.5,
            //     ease: "circOut"
            // }
        },
        exit: {
            y:"-100vh",
            scale: 0.8,
            opacity: 0.5,
            transition: {
                duration: 1, // Example duration
                ease: "easeIn" // Example easing for slide effect
            }
        }
    }

    return(
        <div className={styles.inner}>
            <motion.div {...anim(slide)} className={styles.slide}/>
            <motion.div {...anim(perspective)} className={styles.page}>
             <motion.div {...anim(opacity)}>
            {children}
             </motion.div>
            </motion.div>
        </div>
    )
}