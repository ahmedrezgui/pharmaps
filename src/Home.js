import NavigationBar from "./NavigationBar";
import Product from "./Product"
import AboutUs from "./AboutUs"
import Footerr from "./Footerr";
function App() {
  return (
   <>
    <NavigationBar></NavigationBar>
    <div class="flex flex-col gap-2 px-4 overflow-x-hidden pb-3 pt-16">
      <AboutUs></AboutUs>
    </div>
    <div class="flex flex-col gap-2 px-4 py-3 overflow-x-hidden">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Les produits les plus recherchés :</h5>
      <div class="flex flex-row gap-4 flex-wrap">
            <Product ProductName="Aspegic" Description="ABSidjsiojfsofjisjfsoi"></Product>
            <Product ProductName="Aspegic" Description="ABSidjsiojfsofjisjfsoi"></Product>
            <Product ProductName="Aspegic" Description="ABSidjsiojfsofjisjfsoi"></Product>
            <Product ProductName="Aspegic" Description="ABSidjsiojfsofjisjfsoi"></Product>
            <Product ProductName="Aspegic" Description="ABSidjsiojfsofjisjfsoi"></Product>
            <Product ProductName="Aspegic" Description="ABSidjsiojfsofjisjfsoi"></Product>
            <Product ProductName="Aspegic" Description="ABSidjsiojfsofjisjfsoi"></Product>
            <Product ProductName="Aspegic" Description="ABSidjsiojfsofjisjfsoi"></Product>
            <Product ProductName="Aspegic" Description="ABSidjsiojfsofjisjfsoi"></Product>
      </div>
    </div>
    <Footerr></Footerr>
    
   </>
  );
}

export default App;
