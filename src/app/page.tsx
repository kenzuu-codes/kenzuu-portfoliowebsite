'use client'

import Link from 'next/link'
import { HeroAnimation } from '@/components/HeroAnimation'
import { personalInfo } from '@/lib/personal-info'
import { useRef } from 'react'

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section 
      className="hero"
      style={{
        position: 'relative',
        height: 'calc(100vh - var(--header-height))',
        paddingTop: 0,
        paddingBottom: 0,
        overflow: 'hidden',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Hero Inner Container - Responsive Grid */}
      <div 
        className="heroInner"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(min(100%, 440px), 46%) minmax(0, 54%)',
          gap: 'clamp(3rem, 5vw, 6rem)',
          alignItems: 'center',
          maxWidth: '1680px',
          margin: '0 auto',
          width: '100%',
          height: '100%',
          position: 'relative',
          paddingLeft: 'clamp(2rem, 6vw, 8rem)',
          paddingRight: 'clamp(2rem, 6vw, 8rem)',
          paddingTop: 'clamp(2rem, 4vh, 4rem)',
          paddingBottom: 'clamp(2rem, 4vh, 4rem)',
        }}
      >
        {/* LEFT COLUMN: Text Content - Aligned with header brand "Kenzuu" */}
        <div
          className="heroTextCol"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 'clamp(1rem, 2vh, 1.5rem)',
            zIndex: 20,
            position: 'relative',
            maxWidth: '100%',
            minWidth: 0,
          }}
        >
          <HeroAnimation>
            {/* Construction banner */}
            <div 
              className="inline-block px-6 py-2.5 rounded-lg" 
              style={{ 
                backgroundColor: 'rgba(255, 193, 7, 0.18)',
                backdropFilter: 'blur(8px)',
                border: '1.5px solid var(--hero-banner-warning)',
                boxShadow: '0 0 16px rgba(255, 193, 7, 0.25)',
                marginBottom: 'clamp(1rem, 2vh, 1.5rem)',
              }}
            >
              <p className="text-sm font-bold" style={{ color: 'var(--hero-banner-warning)' }}>
                🚧 Under Construction - Some features are still being refined
              </p>
            </div>

            {/* Welcome tagline */}
            <p 
              className="text-sm uppercase font-semibold heroTagline" 
              style={{ 
                letterSpacing: '0.2em',
                marginBottom: 'clamp(1rem, 2vh, 1.25rem)',
              }}
            >
              Welcome to my portfolio
            </p>

            {/* Brand name heading - H1 for SEO */}
            <h1 
              className="font-display font-black uppercase heroTitle"
            >
              {personalInfo.name}
            </h1>

            {/* Description */}
            <p 
              className="leading-relaxed heroDescription" 
              style={{ 
                opacity: 0.92,
                maxWidth: '46ch',
                fontSize: 'clamp(0.95rem, 1.05rem, 1.075rem)',
                lineHeight: 1.55,
                marginBottom: 'clamp(2rem, 4vh, 2.5rem)',
              }}
            >
              {personalInfo.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/work"
                className="btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.9rem 1.4rem',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#ffffff',
                  backgroundColor: 'var(--hero-accent-blue)',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                  border: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--hero-accent-blue-hover)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(55, 104, 239, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--hero-accent-blue)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                onFocus={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(75, 123, 255, 0.5)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                View Work
              </Link>
              <Link
                href="/contact"
                className="btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.9rem 1.4rem',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: 'var(--hero-accent-blue)',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--hero-accent-blue)',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#132343';
                  e.currentTarget.style.borderColor = 'var(--hero-accent-blue-hover)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'var(--hero-accent-blue)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                onFocus={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(75, 123, 255, 0.5)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Contact
              </Link>
            </div>
          </HeroAnimation>
        </div>

        {/* RIGHT AREA: Animation container with gradient backdrop and alpha transparency */}
        <HeroAnimation>
          <div 
            className="heroAnimation" 
            style={{ 
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              height: 'calc(100vh - var(--header-height))',
              overflow: 'visible',
              gridColumn: '2',
              maxWidth: '120%',
              marginLeft: 'clamp(-2rem, -4vw, -4rem)',
              marginBottom: 'clamp(-12rem, -16vh, -14rem)',
            }}
          >
            {/* Gradient backdrop behind animation - subtle white/blue glow */}
            <div
              className="heroAnimationBackdrop"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.015) 40%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
              aria-hidden="true"
            />
            
            {/* 
              Video and fallback wrapper - ensures consistent sizing
            
            Both the fallback poster image and video element share identical dimensions
            to prevent visual jumps during loading. The wrapper enforces the exact size,
            positioning, and transforms for both elements.
            
            ALPHA TRANSPARENCY VERIFICATION:
            To verify alpha channel is working, temporarily set this div's background to #FF00FF (magenta).
            If pink shows through transparent areas, alpha is working correctly.
            If video has solid black background instead of transparency, re-encode with:
            
            ffmpeg -i input.mov -c:v libvpx-vp9 -pix_fmt yuva420p -b:v 0 -crf 32 -an output-alpha.webm
            
            Flags explained:
            -c:v libvpx-vp9     VP9 codec with alpha support
            -pix_fmt yuva420p   Pixel format with alpha channel (yuva420p, not yuv420p)
            -b:v 0 -crf 32      Variable bitrate with quality level 32 (15-35 range, lower=better)
            -an                 Strip audio track (not needed for background video)
            
            For best quality transparent WebM:
            - Use CRF 25-30 for high quality
            - Use CRF 31-35 for balanced quality/filesize
            - Source should be ProRes 4444 or PNG sequence with alpha
          */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/hero home page/hero page fallback.png"
            aria-hidden="true"
            className="heroAnimationVideo"
            style={{
              position: 'relative',
              width: 'clamp(165%, 180% + 2vw, 195%)',
              maxWidth: 'none',
              height: 'auto',
              minHeight: 'clamp(950px, 115vh, 1350px)',
              objectFit: 'contain',
              objectPosition: 'center bottom',
              transform: 'translateX(clamp(-3%, 0%, 3%)) scale(1.23)',
              transformOrigin: 'center bottom',
              zIndex: 1,
            }}
          >
            <source src="/hero home page/hero page animation.webm" type="video/webm" />
            <source src="/hero home page/hero page animation.mp4" type="video/mp4" />
          </video>
          </div>
        </HeroAnimation>
      </div>

      {/* Responsive layout and light mode styles */}
      <style jsx>{`
        /* Base heroTitle styles */
        .heroTitle {
          font-size: clamp(2.8rem, 6.5vw, 4.8rem);
          line-height: 1.05;
          background: linear-gradient(90deg, #D9E2F7 0%, #648DFF 55%, #D9E2F7 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 0.5rem rgba(100, 141, 255, 0.4));
          letter-spacing: -0.02em;
          margin-bottom: clamp(1.25rem, 3vh, 1.75rem);
        }

        /* Light mode overrides - title gradient and backdrop */
        @media (prefers-color-scheme: light) {
          .heroTitle {
            background: none !important;
            -webkit-background-clip: unset !important;
            background-clip: unset !important;
            -webkit-text-fill-color: #0f172a !important;
            color: #0f172a !important;
            filter: none !important;
            text-shadow: none !important;
          }
          
          .heroAnimationBackdrop {
            background: radial-gradient(ellipse at center, rgba(55, 104, 239, 0.06) 0%, rgba(55, 104, 239, 0.03) 40%, transparent 70%) !important;
          }
        }

        /* Extra Large Desktops (1600px+): Maximum spacing and scale */
        @media (min-width: 1600px) {
          .heroInner {
            grid-template-columns: minmax(500px, 45%) minmax(0, 55%) !important;
            padding-left: clamp(3rem, 8vw, 10rem) !important;
            padding-right: clamp(3rem, 8vw, 10rem) !important;
          }
          
          .heroAnimation {
            margin-left: clamp(-3rem, -5vw, -5rem) !important;
            margin-bottom: clamp(-10rem, -15vh, -12rem) !important;
          }
          
          .heroAnimationVideo {
            width: clamp(155%, 170%, 185%) !important;
            min-height: clamp(950px, 110vh, 1300px) !important;
          }
        }

        /* Large Desktop (1200px - 1599px): Optimal two-column layout */
        @media (min-width: 1200px) and (max-width: 1599px) {
          .heroInner {
            grid-template-columns: minmax(440px, 46%) minmax(0, 54%) !important;
            padding-left: clamp(2.5rem, 7vw, 8rem) !important;
            padding-right: clamp(2.5rem, 7vw, 8rem) !important;
          }
          
          .heroAnimation {
            margin-left: clamp(-2.5rem, -4.5vw, -4.5rem) !important;
            margin-bottom: clamp(-9rem, -13vh, -11rem) !important;
          }
          
          .heroAnimationVideo {
            width: clamp(150%, 165%, 180%) !important;
            min-height: clamp(900px, 108vh, 1250px) !important;
          }
        }
        
        /* Standard Desktop (1024px - 1199px): Balanced proportions */
        @media (min-width: 1024px) and (max-width: 1199px) {
          .heroInner {
            grid-template-columns: minmax(400px, 47%) minmax(0, 53%) !important;
            gap: clamp(2.5rem, 4vw, 4rem) !important;
            padding-left: clamp(2rem, 6vw, 6rem) !important;
            padding-right: clamp(2rem, 6vw, 6rem) !important;
          }
          
          .heroAnimation {
            margin-left: clamp(-2rem, -4vw, -4rem) !important;
            margin-bottom: clamp(-8rem, -12vh, -10rem) !important;
          }
          
          .heroAnimationVideo {
            width: clamp(145%, 160%, 175%) !important;
            min-height: clamp(850px, 105vh, 1200px) !important;
          }
        }
        
        /* Tablet Landscape (768px - 1023px): Start transitioning */
        @media (min-width: 768px) and (max-width: 1023px) {
          .heroInner {
            grid-template-columns: minmax(340px, 48%) minmax(0, 52%) !important;
            gap: clamp(2rem, 3.5vw, 3rem) !important;
            padding-left: clamp(2rem, 5vw, 4rem) !important;
            padding-right: clamp(2rem, 5vw, 4rem) !important;
          }
          
          .heroAnimation {
            margin-left: clamp(-1.5rem, -3vw, -3rem) !important;
            margin-bottom: clamp(-7rem, -11vh, -9rem) !important;
          }
          
          .heroAnimationVideo {
            width: clamp(135%, 150%, 165%) !important;
            min-height: clamp(800px, 102vh, 1150px) !important;
            transform: translateX(clamp(-2%, 0%, 2%)) !important;
          }
          
          .heroTextCol {
            gap: clamp(0.75rem, 1.5vh, 1.25rem) !important;
          }
        }
        
        /* Tablet Portrait & Large Mobile (600px - 767px): Stack vertically */
        @media (min-width: 600px) and (max-width: 767px) {
          .hero {
            height: auto !important;
            min-height: 100vh !important;
            align-items: flex-start !important;
            padding-top: calc(var(--header-height) + 1.5rem) !important;
          }
          
          .heroInner {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            padding-left: 2.5rem !important;
            padding-right: 2.5rem !important;
            height: auto !important;
            padding-top: 2rem !important;
            padding-bottom: 3rem !important;
          }
          
          .heroTextCol {
            text-align: left !important;
            align-items: flex-start !important;
          }
          
          .heroAnimation {
            grid-column: 1 !important;
            justify-content: center !important;
            align-items: flex-end !important;
            height: clamp(500px, 60vh, 600px) !important;
            margin-left: 0 !important;
            margin-bottom: clamp(-5rem, -8vh, -6rem) !important;
          }
          
          .heroAnimationVideo {
            width: 115% !important;
            min-height: clamp(500px, 60vh, 600px) !important;
            transform: translateX(0) !important;
            object-position: center bottom !important;
          }
        }
        
        /* Mobile (480px - 599px): Compact stacked layout */
        @media (min-width: 480px) and (max-width: 599px) {
          .hero {
            height: auto !important;
            min-height: 100vh !important;
            align-items: flex-start !important;
            padding-top: calc(var(--header-height) + 1.5rem) !important;
          }
          
          .heroInner {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding-left: 2rem !important;
            padding-right: 2rem !important;
            height: auto !important;
            padding-top: 1.5rem !important;
            padding-bottom: 2.5rem !important;
          }
          
          .heroTextCol {
            gap: clamp(0.75rem, 1.5vh, 1rem) !important;
          }
          
          .heroAnimation {
            grid-column: 1 !important;
            justify-content: center !important;
            align-items: flex-end !important;
            height: clamp(450px, 55vh, 550px) !important;
            margin-left: 0 !important;
            margin-bottom: clamp(-4rem, -7vh, -5rem) !important;
          }
          
          .heroAnimationVideo {
            width: 110% !important;
            min-height: clamp(450px, 55vh, 550px) !important;
            transform: translateX(0) !important;
            object-position: center bottom !important;
          }
          
          .heroTitle {
            font-size: clamp(2.4rem, 9vw, 3.2rem) !important;
          }
        }

        /* Small Mobile (<480px): Minimal compact layout */
        @media (max-width: 479px) {
          .hero {
            height: auto !important;
            min-height: 100vh !important;
            align-items: flex-start !important;
            padding-top: calc(var(--header-height) + 1rem) !important;
          }
          
          .heroInner {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
            height: auto !important;
            padding-top: 1rem !important;
            padding-bottom: 2rem !important;
          }
          
          .heroTextCol {
            gap: clamp(0.5rem, 1vh, 0.875rem) !important;
          }
          
          .heroAnimation {
            grid-column: 1 !important;
            justify-content: center !important;
            align-items: flex-end !important;
            height: clamp(400px, 50vh, 500px) !important;
            margin-left: 0 !important;
            margin-bottom: clamp(-3.5rem, -6vh, -4.5rem) !important;
          }
          
          .heroAnimationVideo {
            width: 110% !important;
            min-height: clamp(400px, 50vh, 500px) !important;
            transform: translateX(0) !important;
            object-position: center bottom !important;
          }
          
          .heroTitle {
            font-size: clamp(2rem, 10vw, 2.8rem) !important;
          }
          
          .heroAnimationBackdrop {
            width: 85% !important;
            height: 75% !important;
            left: 7.5% !important;
          }
        }

        /* Respect reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .heroAnimationVideo {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}
