
import { signIn, signOut, useSession } from "next-auth/react";
export const Footer =()   => {    
    const { data: sessionData } = useSession();  
    
    return (
<footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <div>
    <p>Copyright © 2023 - All right reserved by Nanolab Industries Ltd</p>
  </div>
</footer>
      );

    };