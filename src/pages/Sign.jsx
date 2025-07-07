import React,{useState, useEffect, useRef} from 'react';


const Sign = () => {
    const nameInputRef=useRef(null);
    const pwInputRef=useRef(null);


    const [messages, setMessages] = useState({
        name: {text:'', color:""},
        id:{text:'', color:""},
        pw:{text:'', color:""},
        pw2:{text:"", color:""},
    })
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pw2, setPw2] = useState('');

    const nameRule=/^[A-Za-z가-힣]{1,20}$/;
    const idRule=/^[a-z0-9]{4,16}$/
    const pwRule=/^[A-Za-z0-9!@#$%^&*()]{1,9}$/



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
            handleMessageChange('name', '이름을 입력해주세요' , 'error-color');
            setName('');
        }else{
             handleMessageChange('name', '이름을 다시 한번 확인해주세요' , 'error-color');
             setName('');
        }
    }

    const handleId= (event) =>{
        const newIdValue=event.target.value;
        setId(newIdValue);
        //console.log(newNameValue)

        if(idRule.test(newIdValue)){
            handleMessageChange('id', '사용가능한 아이디입니다.' , 'success-color')
        }else if(newIdValue===""){
            handleMessageChange('id', '아디를 입력해주세요' , 'error-color');
            setId('');
        }else{
             handleMessageChange('id', '아이디 다시 한번 확인해주세요' , 'error-color');
             setId('');
        }
    }

    const handlePw= (event) =>{
        const newPwValue=event.target.value;
        setPw(newPwValue);
        //console.log(newNameValue)

        if(pwRule.test(newPwValue)){
            handleMessageChange('pw', '사용가능한 비밀번호입니다.' , 'success-color')
        }else if(newPwValue===""){
            handleMessageChange('pw', '비밀번호를 입력해주세요' , 'error-color');
            setPw('');
        }else{
             handleMessageChange('pw', '비밀번호를 다시 한번 확인해주세요' , 'error-color');
            setPw('');
        }
    }

    const handlePw2 = (event) =>{
        const newPw2Value = event.target.value;
        setPw2(newPw2Value);

        if(pw===""){//비밀번호의 값이 비어있는경우
            handleMessageChange('pw', '비밀번호를 입력해주세요','error-color');
            pwInputRef.current.focus();
            setPw2("");
        }else if(newPw2Value===pw){ //비밀번호가 일치하면
            handleMessageChange('pw2', '비밀번호가 일치합니다','success-color');
        }else{
            handleMessageChange('pw2', '비밀번호가 일치하지 않습니다.','error-color');
            setPw2("");
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
                        <input  required type="text" id="userName" value={name} onBlur={handleName} onChange={(event) => setName(event.target.value)} /* ref={nameInputRef} */ />
                        <div className={`text ${messages.name.color}`}>{messages.name.text}</div>
                    </div>
                    <div>
                        <label htmlFor="userId"> 아이디 <span className='required'>*</span></label>
                        <input  required type="text" id="userId" value={id}  onBlur={handleId} onChange={(event) =>{setId(event.target.value)}}/>
                        <i>중복확인</i>
                       <div className={`text ${messages.id.color}`}>{messages.id.text}</div>
                    </div>
                    <div>
                        <label htmlFor="userPw"> 비밀번호 <span className='required'>*</span></label>
                        <input  required type="text" id="userPw" value={pw}  onBlur={handlePw} ref={pwInputRef} onChange={(event) =>{setPw(event.target.value)}} />
                        <div className={`text ${messages.pw.color}`}>{messages.pw.text}</div>
                    </div>
                    <div>
                        <label htmlFor="userPw1"> 비밀번호확인 <span className='required'>*</span></label>
                        <input  required type="text" id="userPw1"  value={pw2}  onBlur={handlePw2} onChange={(event) =>{setPw2(event.target.value)}}/>
                        <div className={`text ${messages.pw2.color}`}>{messages.pw2.text}</div>
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