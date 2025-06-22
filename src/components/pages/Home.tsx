import { Header } from '../layouts/Header'
import { Customers } from '../layouts/Customers'
import { Services } from '../layouts/Services'
import { Proyects } from '../layouts/Proyects'

export const Home = () => {
  return (
    <>
    <Header></Header>
    <Customers></Customers>
    <Services></Services>
    <Proyects></Proyects>
    </>
  )
}
