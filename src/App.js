import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import NftPreview from './Cards/NFT-preview-card/NFT-preview-card';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='nft' element={<NftPreview />} />
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
