import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { product } from './product'
import Card from 'react-bootstrap/Card';
import Image from './components/Image';
import Price from './components/Price';
import Name from './components/Name';
import Description from './components/Description';
function App(props) {
console.log(props)

  return (
    <>
       <Card>
       <Image url={product.url} />
      <Card.Body>
        <Name name={product.name} />
        <Price price={product.price} />
        <Description description={product.description} />
      </Card.Body>
    </Card>
  
    </>
  )};

App.defaultProps = product
export default App
