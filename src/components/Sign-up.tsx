import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";

import { Hero} from "./Hero";
export const Signup =()   => {    
    const { data: sessionData } = useSession();  
    const hello = api.example.hello.useQuery({ text: "from tRPC" });
    return (
        <Hero/>
        );

    };
    