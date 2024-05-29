import PropertySearchForm from '@/components/PropertySearchForm'
import properties from '@/properties_example.json'

const PropertiesPage = () => {
  return (
    <>
      {properties.length === 0 ? (
        <p>no property found</p>
      ) : (
        <div>{properties.map((property) => property.name)}</div>
      )}
    </>
  )
}

export default PropertiesPage
