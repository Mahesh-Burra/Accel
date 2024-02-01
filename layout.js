import { Inter } from 'next/font/google'
//import './globals.css'
import Navbar from './components/Navbar'
import Footers from './components/Footers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Accelotics',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        {children}
        </body>
    </html>
  )
}