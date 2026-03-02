'use client';

import { useState } from 'react';
import { carwashConfig } from '../config/carwash';
import { detectSeason } from '../lib/season';

const BANNERS = {
  default: { message: '', visible: false },
  valentine: {
    message: "💕 Valentine's Special — Treat your car this season. 10% off Premium & Deluxe!",
    visible: true,
  },
  christmas: {
    message: '🎄 Festive Special — Make your car sparkle for Christmas. Book now!',
    visible: true,
  },
  easter: {
    message: '🌸 Easter Fresh — Start the season clean. Special rates this week!',
    visible: true,
  },
};

export default function SeasonalBanner() {
  const [dismissed, setDismissed] = useState(false);
  const season = carwashConfig.season !== 'default' ? carwashConfig.season : detectSeason();
  const banner = BANNERS[season] || BANNERS.default;

  if (!banner.visible || dismissed) return null;

  return (
    <div className="seasonal-banner">
      <span>{banner.message}</span>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="ml-4 opacity-70 hover:opacity-100 font-bold text-lg leading-none"
      >
        ×
      </button>
    </div>
  );
}
