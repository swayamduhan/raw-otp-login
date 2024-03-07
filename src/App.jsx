import { useState } from 'react'
import './App.css'
import Container from './components/Container'
import EnterOTP from './components/EnterOTP'

function App() {
  const [showOtp, setShowOtp] = useState(false)
  const [otp, setOtp] = useState(0)

  return (
    <>
      {showOtp ? <EnterOTP otp={otp} setShowOtp={setShowOtp}/> : <Container setShowOtp={setShowOtp} setOtp={setOtp}/>}
    </>
  )
}

export default App
