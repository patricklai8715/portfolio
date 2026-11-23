'use client';

import { useEffect, useRef } from 'react';

export function ProjectVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !('IntersectionObserver' in window)) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let inView = false;
    let manuallyPaused = false;
    const rememberPause = () => { if (inView && !document.hidden && !reducedMotion.matches) manuallyPaused = true; };
    const rememberPlay = () => { manuallyPaused = false; };

    function syncPlayback() {
      if (!video) return;
      if (!inView || document.hidden || reducedMotion.matches) {
        video.pause();
        return;
      }

      if (manuallyPaused) return;
      video.muted = true;
      void video.play().catch(() => {
        // Native controls remain available when the browser blocks autoplay.
      });
    }

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting && entry.intersectionRatio >= 0.5;
      syncPlayback();
    }, { threshold: 0.5 });

    observer.observe(video);
    video.addEventListener('pause', rememberPause);
    video.addEventListener('play', rememberPlay);
    document.addEventListener('visibilitychange', syncPlayback);
    reducedMotion.addEventListener('change', syncPlayback);

    return () => {
      observer.disconnect();
      video.removeEventListener('pause', rememberPause);
      video.removeEventListener('play', rememberPlay);
      document.removeEventListener('visibilitychange', syncPlayback);
      reducedMotion.removeEventListener('change', syncPlayback);
    };
  }, []);

  return <video ref={videoRef} src={src} poster={poster} aria-label={label}
    controls muted playsInline preload="metadata" />;
}
