import data from './Data';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomsScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="/">amazona</a>
        </header>
        <main>
          <Route>
            <Route path="/" element={<HomeScreen />} />
          </Route>
          <h1>Featured Products</h1>
          {/* <div className="products">
            {data.Products.map((product) => (
              <div className="product" key={product.slug}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </a>
                <div className="product-info">
                  <a href={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </a>
                  <p>
                    <strong>{product.price}</strong>
                  </p>
                  <button>Add to Cart</button>
                </div>
              </div>
            ))}
          </div> */}
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
