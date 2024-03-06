import '@/assets/styles/global.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'propertyPulse | Find the perfect Rental',
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
      </body>
    </html>
  )
}

export default MainLayout
