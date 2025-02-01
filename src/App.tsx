import './App.css'
import { Provider as JotaiProvider } from 'jotai'
import { store } from './stores'
import { MainContents } from './components/MainContents'
import { BaseModal } from './modals/BaseModal'

function App() {
  return (
    <JotaiProvider store={store}>
      <MainContents />
      <BaseModal />
    </JotaiProvider>
  )
}

export default App
