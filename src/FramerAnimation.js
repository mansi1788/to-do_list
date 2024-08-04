import{motion}from 'framer-motion'

export default function FramerAnimation() {
    return(
        <motion.h1
        initial={{x:-100}}
        animate={{x:0}}
        transition={{
            duration:"2",
            delay:"1"
        }}

        >
        It is H1 for animation using framer motion.
        </motion.h1>
    )
}