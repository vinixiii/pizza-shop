import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes/router';

import './styles/global.css';

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />

      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
