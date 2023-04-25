import { signIn, signOut, useSession } from "next-auth/react";
import { IconArrowRigh}  from "../assests/icons";
import { IconX }  from "../assests/icons";

export const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1 pl-5 text-3xl font-bold">
        {sessionData?.user?.name ? `Notes for ${sessionData.user.name}` : ""}
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown-end dropdown">
          {sessionData?.user ? (
            <label
              tabIndex={0}
              className="btn-ghost btn-circle avatar btn"
              onClick={() => void signOut()}
            >
              <div className="w-10 rounded-full">
                <img
                  src={sessionData?.user?.image ?? ""}
                  alt={sessionData?.user?.name ?? ""}
                />
              </div>
            </label>
          ): 
          (
          //  <label htmlFor="my-modal-3" className="cursor-pointer whitespace-nowrap font-sans text-base font-medium text-black hover:text-gray-900">SignIn</label>
           <label htmlFor="my-modal-3" className="btn btn-sm bg-base-300 md:text-gray-600 border-hidden hover:bg-base-300 px-8">Sign In</label>

          )}
          <button
              className="btn"
              onClick={() => void signOut()}
            >
              Sign up
            </button>
        </div>
      </div>
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute 
    right-2 top-2 bg-white  md:text-gray-600 border-hidden hover:bg-white"><IconX/>
    </label> 
    
    <div className="grid grid-cols-1 divide-y">
    <h1 className="text-5xl font-bold py-4" ></h1>
    </div>
    <div>
    <h1 className="text-2xl font-bold text-center ">||</h1>
    </div>
    <div>

    <h1 className="text-3xl font-bold text-center py-4">Nanolab</h1>
    </div>
    
       
      <div className="card-body">
        <div className="form-control">
     
          <input type="text" placeholder="Email" className="input input-bordered input-md
           focus:border-black focus:border-hidden w-full max-w-xs" />
        </div>
        <div className="form-control">
    
          <input type="text" placeholder="***********" className="input input-bordered input-md
           focus:border-black focus:border-hidden w-full max-w-xs" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover underline text-sm text-neutral-300">Forgot password?</a>
            <label className="btn bg-neutral-300 border-hidden md:text-white btn-circle">
              <IconArrowRigh/>
              </label>
          </label>
        </div>
        <label className="label">
     <span className="pr-4 text-xs text-gray-400 uppercase whitespace-nowrap">Or create account</span>
     
     </label>
        {/* <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div> */}
      </div>
    </div>
  


</div>
    </div>
    
  );
};