import AuthContextProvider from './context/AuthContext';
import './App.scss'
import Routes from './pages/Routes'

function App() {
  return (
    <AuthContextProvider>
    <Routes />
    </AuthContextProvider>
  )
}

export default App