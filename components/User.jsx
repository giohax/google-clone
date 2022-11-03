import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import user from "../public/user.png";
import Image from "next/image";

const User = ({ className }) => {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                <Image
                    onClick={signOut}
                    src={user}
                    width={35}
                    height={35}
                    className={`cursor-pointer ${className}`}
                />
            </>
        );
    }
    return (
        <>
            <button
                onClick={signIn}
                className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 cursor-pointer hover:shadow-md ${className}`}
            >
                Sign In
            </button>
        </>
    );
};

export default User;
