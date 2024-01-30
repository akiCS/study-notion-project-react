import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignUpForm = ({setIsLoggedIn}) => {

  const [formData , setFormData] = useState({firstName:"", lastName:"" , email:"" , password:"" , confirmPassword:""});

  const [showPassword , setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [accountType , setAccountType] = useState("student")

  const navigate = useNavigate()

  function changeHandler(event) {
    setFormData( (prevData) => (
      {
        ...prevData,
        [event.target.name] : event.target.value
      }
    ))
  }

  function submitHandler(event) {
    event.preventDefault();
    if(formData.password != formData.confirmPassword) {
      toast.error("password do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("account created");
    const accountData = {
      ...formData
    };

    const finalData = {
      ...accountData,
      accountType
    }

    console.log(finalData);

    navigate("/dashboard");


  }

  return (

    <div>

      <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>

        <button
            className={`${accountType === "student" 
            ?
            "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("student")}>
                Student
        </button>

        <button
            className={`${accountType === "instructor" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("instructor")}>
                Instructor
        </button>
        
      </div>

      <form onSubmit={submitHandler}>

        <div className='flex flex-row justify-between mt-4'> 

          <label>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
            <input required type="text" name='firstName' onChange={changeHandler} placeholder='Enter First Name' value={formData.firstName} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2'></input>
          </label>

          <label>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
            <input required type='text' name='lastName' onChange={changeHandler} placeholder='Enter Last Name' value={formData.lastName} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2'></input>
          </label>

        </div>

        <div className='mt-4'>

          <label className='mt-4'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
            <input required type='email' name="email" onChange={changeHandler} placeholder='Enter Your Email' value={formData.email} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2'></input>
          </label>

        </div>

        <div className='flex justify-between mt-4'>

          <label className='relative'>

            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
            <input type={showPassword ? ("text") : ("password")} name='password' onChange={changeHandler} placeholder='Enter Password' value={formData.password} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2'></input>

            <span onClick={() => setShowPassword((prev) => !prev)} className='absolute right-3 top-[38px] cursor-pointer text-white'>
              {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>

          </label>

          <label className='relative'>

            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
            <input type={showConfirmPassword ? ("text") : ("password")} name='confirmPassword' onChange={changeHandler} placeholder='Confirm Password' value={formData.confirmPassword} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2'></input>

            <span onClick={() => setShowConfirmPassword((prev) => !prev)} className='absolute right-3 top-[38px] cursor-pointer text-white'>
              {showConfirmPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>

          </label>

        </div>

        <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Create Account</button>

      </form>

    </div>
  )
}

export default SignUpForm;
