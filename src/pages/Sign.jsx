import React,{useState, useEffect, useRef} from 'react';


const Sign = () => {
    const [messages, setMessages] = useState({
        name: {text:'', color:""}
    })
    const [name, setName] = useState('');

    const nameRule=/^[A-Za-z가-힣]{1,20}$/;


   /*  useEffect(() =>{
        const handleMessageChange = (key, text, color) => {
            setMessages((prevMessages) => ({
                ...prevMessages,
                [key]:{text, color}
            }))
        }
    }) */
    
     const handleMessageChange = (key, text, color) => {
            setMessages((prevMessages) => ({
                ...prevMessages,
                [key]:{text, color}
            }))
        }
    const handleName= (event) =>{
        const newNameValue=event.target.value;
        setName(newNameValue);
        //console.log(newNameValue)

        if(nameRule.test(newNameValue)){
            handleMessageChange('name', '사용가능한 이름입니다.' , 'success-color')
        }else if(newNameValue===""){
            handleMessageChange('name', '이름을 입력해주세요' , 'error-color')
        }else{
             handleMessageChange('name', '이름을 다시 한번 확인해주세요' , 'error-color')
        }
    }



    return (
        <div className='sign'>
            <h2>회원가입</h2>
            <div className="joinImg">
                <span>회원정보입력</span>
            </div>

            <form action="#">
                <fieldset>
                    <legend>회원가입</legend>
                    <div>
                        <label htmlFor="userName"> 이름 <span className='required'>*</span></label>
                        <input  required type="text" id="userName" value={name}  onChange={handleName} />
                        <div className="text">영문대소문자한글로 작성해주세요</div>
                    </div>
                    <div>
                        <label htmlFor="userId"> 아이디 <span className='required'>*</span></label>
                        <input  required type="text" id="userId" />
                        <i>중복확인</i>
                        <div className="text">영문대소문자한글로 작성해주세요</div>
                    </div>
                    <div>
                        <label htmlFor="userPw"> 비밀번호 <span className='required'>*</span></label>
                        <input  required type="text" id="userPw" />
                    </div>
                    <div>
                        <label htmlFor="userPw1"> 비밀번호확인 <span className='required'>*</span></label>
                        <input  required type="text" id="userPw1" />
                    </div>
                    <div>
                        <label htmlFor="userPhone">전화번호 <span className='required'>*</span></label>
                        <input  required type="text" id="userPhone" />
                        <i>휴대폰 인증</i>
                    </div>
                     <div>
                        <label htmlFor="userPhone">생년월일 <span className='required'>*</span></label>
                        <input  required type="text" id="userPhone" />
                    </div>
                    <div>
                        <label htmlFor="userPhone">SMS, kakao 수신 여부 <span className='required'>*</span></label>
                        <label className='label'> <input type="radio" name="snsAgree" value="yes" /> 예</label>
                        <label className='label'> <input type="radio" name="snsAgree" value="no" /> 아니오</label>
                    </div>
                    <div>
                        <label htmlFor="userEmail">이메일 <span className='required'>*</span></label>
                        <input  required type="text" id="userEmail" />
                    </div>
                    <div>
                        <label htmlFor='userEmail1'>메일수신여부 <span className='required'>*</span></label>
                       <label className='label'> <input type="radio" name="snsAgree1" value="yes"   /> 예</label>
                        <label className='label'> <input type="radio" name="snsAgree1" value="no" /> 아니오</label>
                    </div>
                    <div>
                        <label htmlFor='recommender'>추천인 아이디</label>
                        <input  required type="email" id="recommender" />
                    </div>
                </fieldset>
            </form>
        </div>  
       
    );
};

export default Sign;