import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      {/* Content wrapper */}
      <div className="w-full flex items-top justify-center">
        {/* Forgot Password form container */}
        <div className="max-w-sm px-6 py-16 md:p-0 w-full">
          {/* Logo and header section */}
          <div className="space-y-6 mb-6 items-center flex flex-col">
            <div className="flex flex-col gap-y-3 text-center">
              <h1 className="text-2xl md:text-3xl font-bold">Forgot Password</h1>
              <p className="text-muted-foreground text-sm">
                Enter your email address to receive a password reset link.
              </p>
            </div>
          </div>
          {/* Input fields section */}
          <div className="space-y-4 mb-6">
            <div className="space-y-2">
              <Input id="email" placeholder="Email" type="email" />
            </div>
          </div>
          {/* Send Reset Link button section */}
          <div className="flex flex-col space-y-6">
            <Button className="w-full">Send Reset Link</Button>
          </div>
        </div>
      </div>
    </div>
  );
}