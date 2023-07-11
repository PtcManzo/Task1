import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  const addToCart = () => {
    // For this example, we'll show an alert message
    alert('Product added to cart!');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.title} className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:ml-8 pt-10">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">${product.price}</p>
          <button onClick={addToCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
