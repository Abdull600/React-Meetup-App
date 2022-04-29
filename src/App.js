import { Route, Routes } from "react-router-dom";
import NewMeetupsPage from "./pages/NewMeetups";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import Layout from "./layouts/Layout";

function App() {
  return (
    <div className="App">

      <Layout>
          <Routes>
              <Route path="/" element={ < AllMeetupsPage/> } />
              <Route path="/new-meetup" element={ < NewMeetupsPage/> } />
              <Route path="/favorites" element={ < FavoritesPage/> } />
          </Routes> 
      </Layout>
    </div>
  );
}

export default App;
