import { useState } from "react";
import Input from "@/components/input";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    return (
        <div className="relative h-full w-full bg-[url('/images/collage-1.png')] bg-no-repeat bg-center bg-fixed bg-cover ">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    {/* <img src="/images/logo.png" alt="logo" className="h-14" /> */}
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <div className="flex justify-center">
                            <img src="/images/logo.png" alt="logo" className="h-14" />
                        </div>
                        <h2 className="text-white text-4xl mb-8 font-semibold ">
                            Sign In
                        </h2>
                        <div className="flex flex-col gap-4">
                        <Input
                            label="Username"
                            onChange={(ev) => setName (ev.target.value)}
                            id="name"
                           
                            value={name}
                            />
                            <Input
                            label="Email"
                            onChange={(ev) => setEmail (ev.target.value)}
                            id="email"
                            type="email"
                            value={email}
                            />


                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Auth;