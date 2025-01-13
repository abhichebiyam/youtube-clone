'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic'; // Ensure the page is dynamically rendered

export default function WatchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Watch />
    </Suspense>
  );
}

function Watch() {
  const videoPrefix = 'https://storage.googleapis.com/neetcode-yt-processed-videos-0106/';
  const videoSrc = useSearchParams().get('v');

  return (
    <div>
      <h1>Watch Page</h1>
      <video
        controls
        src={`${videoPrefix}${videoSrc}`}
        style={{ width: '100%', maxHeight: '500px' }}
      />
    </div>
  );
}