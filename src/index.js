import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <FavoritesContextProvider>
      <BrowserRouter>
            <App />
        </BrowserRouter>
   </FavoritesContextProvider>
  </React.StrictMode>
);

