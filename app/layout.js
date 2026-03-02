import './globals.css'
import { carwashConfig } from '../config/carwash'
import { detectSeason } from '../lib/season'
import WhatsAppFloat from '../components/WhatsAppFloat'
import SeasonalBanner from '../components/SeasonalBanner'

export const metadata = {
  title: `${carwashConfig.name} — ${carwashConfig.tagline}`,
  description: `Professional car wash at ${carwashConfig.address}. ${carwashConfig.tagline}. Basic KES 500, Premium KES 800, Deluxe KES 1,200.`,
}

export default function RootLayout({ children }) {
  const season = carwashConfig.season !== 'default' ? carwashConfig.season : detectSeason()

  return (
    <html lang="en" data-season={season}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
        <SeasonalBanner />
        {children}
        <WhatsAppFloat phone={carwashConfig.whatsapp} />
      </body>
    </html>
  )
}
