import { RouterProvider } from 'react-router-dom';

import { router } from './routes/router';

import './styles/global.css';

export function App() {
  return <RouterProvider router={router} />;
}
