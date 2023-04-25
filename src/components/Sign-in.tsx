import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
export const Signin =()   => {    
    const { data: sessionData } = useSession();  
    const hello = api.example.hello.useQuery({ text: "from tRPC" });
    return ( 
    <div className="navbar bg-base-300">
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        
         
 
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  
</div>
</div>
         );

    };

