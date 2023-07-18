import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function Navbar() {
  const { user } = useUser();
  return (
    <nav>
      <Link href="/">Home</Link>
      <>
        {user ? (
          <>
            <Link href="/profile">Profile</Link>
            <button>
              <Link href="/api/auth/logout">Logout</Link>
            </button>
          </>
        ) : (
          <button>
            <Link href="/api/auth/login">Login</Link>
          </button>
        )}
      </>
    </nav>
  );
}
