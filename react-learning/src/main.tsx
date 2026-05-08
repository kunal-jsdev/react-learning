import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Page from './week-3/Page'
import { Provider } from 'react-redux'
import { store } from './week-3/store/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Page/>
    </Provider>
  </StrictMode>,
)
