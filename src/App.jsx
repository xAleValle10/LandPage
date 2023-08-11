
import './App.css'
import { FirstLabel } from './components/FirstLabel'
import { HeaderPage } from './components/HeaderPage'
import { SecondLabel } from './components/SecondLabel'
import { ThirdLabel } from './components/ThirdLabel'




function App() {

  return (
  <div>
    <header>
      <HeaderPage/>
    </header>
    
    <div>  
      <FirstLabel/>
    </div>
    <div>
      <SecondLabel/>
    </div>
    <div>
      <ThirdLabel/>
    </div>
  </div>
  )
}

export default App
