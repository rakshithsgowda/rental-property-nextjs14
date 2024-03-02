import '@/assets/styles/global.css'

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
        <div>{children} </div>
        {/* footer and 
        toast container */}
      </body>
    </html>
  )
}

export default MainLayout
