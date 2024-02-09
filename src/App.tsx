import './App.css'
import moment from 'moment'
import Hoc from './componens/Hoc'

function App() {

  const m = moment()
  const m2 = moment('2024-02-07 05:24:00')

  console.log(m, m2, m.diff(m2, 'hours'))

  return (
    <>
      <Hoc />
    </>
  )
}

export default App
