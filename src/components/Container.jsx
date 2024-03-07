export default function Container({ setShowOtp, setOtp }) {
    return <div className="outer-div">
        <div id="header">Login via OTP</div>
        <input id="input-phone" type="text" placeholder="enter your mobile" />
        <button className="btn" onClick={function(){
            if(document.getElementById("input-phone").value != ""){
                setShowOtp(true)
            }
            calculateOtp(setOtp)
        }}>Send OTP</button>
    </div>
}

function calculateOtp(setOtp) {
    const otp = Math.floor(Math.random() * 9000) + 1000
    alert(`Your OTP is ${otp}`)
    setOtp(otp)
}