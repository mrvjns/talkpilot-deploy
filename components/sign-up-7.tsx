"use client";

import { useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signUp } from "@/actions/auth";
import { useRouter } from "next/navigation";

export function SignUp7() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreedToTerms) {
      setError("You must agree to the Terms & Conditions");
      return;
    }
    setError(null);

    // Placeholder for sign-up logic
    const formData = new FormData(e.currentTarget);
    const result = await signUp(formData)


  if (result.status === "success") {
    router.push("/login");
  } else {
    setError(result.status);
  }
    
    // You would typically make an API call here
  };
  
  return (
    <div className="flex md:items-center justify-center min-h-screen bg-background">
      {/* Content wrapper with max width */}
      <div className="w-full max-w-md p-8 space-y-8">
        {/* Header section with logo and text */}
        <div className="text-center flex flex-col items-center gap-6">
          <Logo />
          {/* Title and subtitle */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold">
              Create an account
            </h2>
            <p className="text-sm text-muted-foreground">
              Let's get started. Fill in the details below to create your
              account.
            </p>
          </div>
        </div>

        {/* Form inputs section */}
        <form onSubmit={handleSignUp} className="space-y-4">
          {/* Name input field */}
          <Input 
            placeholder="Name" 
            name = "username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* Email input field */}
          <Input 
            type="email" 
            name = "email"
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password input field with helper text */}
          <div className="space-y-2">
            <Input 
              type="password" 
              name = "password"
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
            <p className="text-sm text-muted-foreground">
              Minimum 8 characters.
            </p>
          </div>

          {/* Terms and conditions checkbox with link */}
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms" 
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
            />
            <label htmlFor="terms" className="text-sm leading-none ">
              I agree to the{" "}
              <Link href="#" className="underline">
                Terms & Conditions
              </Link>
            </label>
          </div>

          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}

          {/* Footer section with sign up button and sign in link */}
          <div className="space-y-6">
            <Button type="submit" className="w-full">Sign up</Button>
            <p className="text-sm text-center text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary underline">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

