export default function EnterOTP({ otp, setShowOtp }) {
    return <div className="outer-div">
        <div id="header">Enter OTP</div>
        <div className="enter-otp">
            <input id="1" type="text" maxLength={1} onChange={()=>handleChange(1)} />
            <input id="2" type="text" maxLength={1} onChange={()=>handleChange(2)}/>
            <input id="3" type="text" maxLength={1} onChange={()=>handleChange(3)}/>
            <input id="4" type="text" maxLength={1} />
        </div>
        <button className="btn" onClick={()=>handleLogin(otp, setShowOtp)}>Login</button>
    </div>
}

function handleChange(id) {
    if(document.getElementById(id).value !== ""){
        document.getElementById(id+1).focus()
    }
}

function handleLogin(otp, setShowOtp) {
    const enteredOtp = document.getElementById("1").value + document.getElementById("2").value + document.getElementById("3").value + document.getElementById("4").value
    if(enteredOtp == otp){
        alert("Successfully logged in!")
        setShowOtp(false)
    } else {
        alert("wrong otp, try again :(")
    }
}