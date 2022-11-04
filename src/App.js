import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import NftPreview from './Cards/NFT-preview-card/NFT-preview-card';
import ExpensesChartComponent from './Cards/Expenses_chart_component/Expenses_chart_component';
import { OrderSummaryComponent } from './Cards/Order-summary-component/Order-summary-component';
import { ProfileCardComponent } from './Cards/Profile-card-component/Profile-card-component';
import Product from './Cards/Product_preview_card_component/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='nft' element={<NftPreview />} />
        <Route path='expenses-chart-component
' element={<ExpensesChartComponent />} />
        <Route path='order-Summary' element={<OrderSummaryComponent />} />
        <Route path='profile-card-component' element={<ProfileCardComponent />} />
        <Route path='product-preview' element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
