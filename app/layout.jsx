import Navbar from '@/components/Navbar'
import '@/assets/styles/global.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'RENTA | Find the perfect Rental',
  description: 'find your dream rental property',
  keywords: 'rental,find rentals,find properties',
}

const MainLayout = ({ children }) => {
  return (
    // global context provider
    // auth context provider
    <html lang='en'>
      <body>
        {/* Navbar */}
        <Navbar />
        <main>{children} </main>
        {/* footer and 
        toast container */}
        <Footer />
      </body>
    </html>
  )
}

export default MainLayout
