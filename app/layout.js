
// app/layout.js
import './globals.css'

export const metadata = {
  title: 'Rupa\'s Mall Car Wash - Professional Car Washing Services in Nairobi',
  description: 'Professional car wash services in Westlands, Nairobi. Quality cleaning, affordable prices, exceptional service. Basic Wash KES 500, Premium KES 800, Deluxe KES 1,200.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}