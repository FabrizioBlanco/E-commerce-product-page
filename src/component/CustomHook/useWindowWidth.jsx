import { useState, useEffect } from 'react'
//This is a custom Hook
export default function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
            // console.log(`Window resized to: ${window.innerWidth}`)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return windowWidth;
}