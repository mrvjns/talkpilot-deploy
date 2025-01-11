import { login, signup } from './actions';
import { SignIn1 } from '@/components/sign-in-1'; // Adjusted import path

export default function LoginPage() {
  return (
    <div>
      <SignIn1 />
    </div>
  );
}