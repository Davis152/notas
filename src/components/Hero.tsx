import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import  { logofb  } from "../assests/svgs";

import Image from 'next/image';

export const Hero =()   => {    
    const { data: sessionData } = useSession();  
    const hello = api.example.hello.useQuery({ text: "from tRPC" });
    return (
      
  <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <p className="py-6">Provident cupiduaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <div className="grid grid-cols-1 divide-y">
    <h1 className="text-2xl font-bold text-left">NanoLab</h1>
    <div></div>
    </div>
    <div>
    <h2 className="mt-3  mb-5 text-4xl font-bold font-sans tracking-tight text-black">Sign Up</h2>
    </div>
   
<div className="grid grid-cols-4 gap-4">
  <div> 
    <a href="#google-sign-in" className="inline-flex w-full justify-center rounded-md border border-gray-300 
bg-white py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-50"><span className="sr-only">Sign up with Google</span><svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><title>Google</title><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 
12s5.56 12 12.173 12c3.573 
0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path></svg></a>
    </div>
    <div> 
    <a href="#facebook-sign-in" className="inline-flex w-full justify-center rounded-md border border-gray-300
     bg-white py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-50"><span className="sr-only">Sign up with Facebook</span><svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5"><path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 
     14.991 20 10z" clip-rule="evenodd"></path></svg></a>
    </div>
</div>

     <label className="label">
     <span className="pr-4 text-xs text-gray-400 uppercase whitespace-nowrap">Or create account</span>

         <div className="w-40 border-t border-gray-500"></div>
     
     </label>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="" className="bg-white block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="" className="bg-white block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm" />
          <div className="py-4">
          <div className="flex mt-3 ">
            <input type="checkbox" name="terms" className="bg-white h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"/>
            <label className="ml-3 block text-sm text-gray-900">I agree to <a href="/terms" className="link">terms of service</a></label>
          </div>
          <div className="flex mt-3 ">
          <input type="checkbox" name="updates" className="bg-white h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"/>
          <label className="ml-3 block text-sm text-gray-900">I want to receive product updates.</label>
          </div>
          </div>
          
        </div>
        <div className="form-control mt-1">
          <button className="btn border-hidden hover:bg-gray-600">Sign Up</button>
        </div>
        <div className="form-control mt-1">
          <button className="btn bg-gray-200 border-hidden  hover:bg-gray-300 text-gray-500">Sign In</button>
        </div>
        <div>
        <label className="label-text-alt link link-hover text-sm text-neutral-300">ALREADY REGISTERED?</label> 
        </div>
{/*         
        <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-black">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p> */}
            <AuthShowcase />
          {/* </div> */}
      </div>
    </div>
  </div>
</div>
        );

    };
    
const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};