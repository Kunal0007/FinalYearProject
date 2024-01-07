import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const RegisterForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [collegeId, setCollegeId] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [cgpa, setCgpa] = useState('');
    // const [DOB, setDOB] = useState(new Date());
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    return (
        <div className="p-6 space-y-4 md:space-y-6">
            {/* <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1> */}
            <form className="mt-8">
                <div className="flex flex-col mb-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6">
                    <div className="w-full">
                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input onChange={(e) => setFirstName(e.target.value)}
                                    value={firstName} required placeholder="John" name="firstName" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input onChange={(e) => setLastName(e.target.value)}
                                    value={lastName} required placeholder="Doe" name="lastName" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                </div>
                <div className="flex flex-col mb-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6">
                    <div className="w-full">
                        <label htmlFor="collegeId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">College Id</label>
                        <input onChange={(e) => setCollegeId(e.target.value)}
                                    value={collegeId} required placeholder="123.." name="collegeId" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input onChange={(e) => setEmail(e.target.value)}
                                    value={email} required placeholder="name@company.com" name="email" type="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                </div>
                <div className="flex flex-col mb-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6">
                    <div className="w-full">
                        <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                        <input onChange={(e) => setDepartment(e.target.value)}
                                    value={department} required placeholder="Computer" name="department" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="cgpa" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CGPA</label>
                        <input onChange={(e) => setCgpa(e.target.value)}
                                    value={cgpa} required max={10} min={1} placeholder="9" name="cgpa" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                </div>
                <div className="flex flex-col mb-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6">
                    <div className="w-full">
                        <label htmlFor="DOB" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                        <input required placeholder="01/01/2000" name="DOB" type="date" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="w-full">                
                        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                        {/* <input required placeholder="Female" name="gender" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> */}
                        <select onChange={(e) => setGender(e.target.value)}
                                    value={gender} id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a gender</option>
                            <option value="US">Male</option>
                            <option value="CA">Female</option>
                            <option value="FR">Bisexaul</option>                            
                        </select>
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile No.</label>
                    <input onChange={(e) => setPhone(e.target.value)}
                                    value={phone} required placeholder="9999XXXXXX" name="phone" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input onChange={(e) => setPassword(e.target.value)}
                                    value={password} required placeholder="" name="password" type="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-6">
                    <label htmlFor="cpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password
                    </label>
                    <input onChange={(e) => setCPassword(e.target.value)} value={cpassword} required placeholder="" name="cpassword" type="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                {/* <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input required id="terms" aria-describedby="terms" name="terms" type="checkbox" className="w-4 h-4 bg-gray-50 rounded border-gray-300 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-medium text-gray-900 dark:text-white">I accept the<a className="ml-1 text-blue-700 dark:text-blue-500 hover:underline" href="/terms-and-conditions/">Terms and Conditions</a>
                        </label>
                    </div>
                </div> */}
                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create Account</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account? <Link to="../login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here.</Link>
                </p>
            </form >
        </div>
    )
}

export default RegisterForm