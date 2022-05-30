import React, { useState} from "react";
import '../FileCSS/ResetPasswordInputEmail.css'

function ResetPasswordInputEmail(){
    const [email, setDetails] = useState({email:""});

    const submitHandler = e => {
        e.preventDefault();
    }
    return(
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <img src={ require('../picture/logo_DNTU.png') } />
                <h1> Bạn quên mật khẩu?</h1>
                <h2> Đừng lo lắng! Nhập email vào ô bên dưới và</h2>
                <h2> chúng tôi sẽ gửi link để bạn nhập mật khẩu mới</h2>
                <div className='form-group'>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...email, email: e.target.value})} value={email.email}/>
                </div>
                <input type="submit" value="Send"/>
            </div>
        </form>
    )
}

export default ResetPasswordInputEmail;