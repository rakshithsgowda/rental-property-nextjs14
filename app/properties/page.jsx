import Properties from '@/components/Properties'
import PropertySearchForm from '@/components/PropertySearchForm'

const PropertiesPage = () => {
  return (
    <>
      <section className='bg-blue-700 py-5'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
          <PropertySearchForm />
        </div>
      </section>
      <section classname='bg-blue-700 py-5'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
          <div className=''>
            {/* <Properties /> */}
            {Properties.map((property) => (
              <div>{property.name}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PropertiesPage
