import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Title } from './components/todo.jsx';
import { Provider } from 'react-redux';
import store from './services/store';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Title title={'Todos - React JS'} />
      <App />
    </Provider>
  </StrictMode>
);
