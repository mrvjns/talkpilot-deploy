import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";

export function ResetPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      {/* Content wrapper */}
      <div className="w-full flex items-top justify-center">
        {/* Reset Password form container */}
        <div className="max-w-sm px-6 py-16 md:p-0 w-full">
          {/* Logo and header section */}
          <div className="space-y-6 mb-6 items-center flex flex-col">
            <div className="flex flex-col gap-y-3 text-center">
              <h1 className="text-2xl md:text-3xl font-bold">Reset Password</h1>
              <p className="text-muted-foreground text-sm">
                Enter your new password to reset your password.
              </p>
            </div>
          </div>
          {/* Input fields section */}
          <div className="space-y-4 mb-6">
            <div className="space-y-2">
              <Input id="new-password" placeholder="New Password" type="password" />
              <Input id="confirm-password" placeholder="Confirm Password" type="password" />
            </div>
          </div>
          {/* Reset Password button section */}
          <div className="flex flex-col space-y-6">
            <Button className="w-full">Reset Password</Button>
          </div>
        </div>
      </div>
    </div>
  );
}