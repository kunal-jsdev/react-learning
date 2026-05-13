import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import StorePage from './zustand/StorePage'
// import Page from './week-3/Page'
// import { Provider } from 'react-redux'
// import { store } from './week-3/store/store'
import { QueryClientProvider } from '@tanstack/react-query'
import { QueryClient } from '@tanstack/react-query'
import TodoPage from './final/TodoPage'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Provider store={store}>
      <Page/>
    </Provider> */}
    <QueryClientProvider client={queryClient}>
      <TodoPage />
    </QueryClientProvider>
    {/* <StorePage /> */}
  </StrictMode>,
)
