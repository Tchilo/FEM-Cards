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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='nft' element={<NftPreview />} />
        <Route path='Expenses_chart_component
' element={<ExpensesChartComponent />} />
        <Route path='Order-Summary' element={<OrderSummaryComponent />} />
        <Route path='Profile-card-component' element={<ProfileCardComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
