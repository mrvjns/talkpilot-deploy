"use client";

import { useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signIn } from "@/actions/auth";
import { useRouter } from "next/navigation";

export function SignIn9() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    // Placeholder for sign-in logic
    const formData = new FormData(e.currentTarget);
    const result = await signIn(formData)


  if (result.status === "success") {
    router.push("/");
  } else {
    setError(result.status);
  }
    // You would typically make an API call here
  };

  return (
    <div className="flex md:items-center justify-center min-h-screen bg-background">
      {/* Content wrapper */}
      <div className="w-full flex items-top justify-center">
        {/* Sign-in form container */}
        <div className="max-w-sm px-6 py-16 md:p-0 w-full ">
          {/* Logo and header section */}
          <div className="space-y-6 mb-6 items-center flex flex-col">
            <Logo />
            <div className="flex flex-col gap-y-3 text-center">
              <h1 className="text-2xl md:text-3xl font-bold">Sign in</h1>
              <p className="text-muted-foreground text-sm">
                Log in to unlock tailored content and stay connected with your
                community.
              </p>
            </div>
          </div>
          {/* Form section */}
          <form onSubmit={handleSignIn} className="space-y-6">
            {/* Input fields section */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Input 
                  id="email" 
                  name="email"
                  placeholder="Email or username" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Input 
                  id="password" 
                  name="password"
                  placeholder="Password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            {/* Sign-in button and sign-up link section */}
            <div className="flex flex-col space-y-6">
              <Button type="submit" className="w-full">Sign in</Button>
              {/* Forgot password link */}
              <div className="flex justify-center">
                <Link
                  className="underline text-sm text-muted-foreground hover:text-foreground"
                  href="/forgot-password"
                >
                  Forgot password?
                </Link>
              </div>
              <p className="text-sm text-center text-muted-foreground">
                Dont have an account?{" "}
                <Link className="underline text-foreground" href="/register">
                  Sign up
                </Link>
                {error && (
                <p className="text-sm text-red-500">{error}</p>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

