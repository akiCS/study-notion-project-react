import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {

  return (

    <Template
      title="Join the millions learning to code with studyNotion for free"
      desc1="Build Skills for today, tommorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    ></Template>
  )
}

export default Signup;
