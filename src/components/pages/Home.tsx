import { Header } from '../layouts/Header'
import { Customers } from '../layouts/Customers'
import { Services } from '../layouts/Services'
import { Proyects } from '../layouts/Proyects'
import { Blog } from '../layouts/Blog'

export const Home = () => {
  return (
    <>
    <Header></Header>
    <Customers></Customers>
    <Services></Services>
    <Proyects></Proyects>
    <Blog></Blog>
    </>
  )
}
