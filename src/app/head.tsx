import { Metadata } from 'next'

/**
 * Homepage Metadata with Performance Optimizations
 * 
 * Preconnects and resource hints for hero video assets
 */
export const metadata: Metadata = {
  title: 'Home',
}

export default function Head() {
  return (
    <>
      {/* Preload critical hero assets */}
      <link
        rel="preload"
        href="/hero home page/hero page fallback.png"
        as="image"
        type="image/png"
      />
      
      {/* Prefetch video for faster playback (optional - only if bandwidth permits) */}
      {/* Uncomment if you want to aggressively preload video */}
      {/* <link
        rel="prefetch"
        href="/hero home page/hero page animation.webm"
        as="video"
        type="video/webm"
      /> */}
    </>
  )
}
