import { AuthContext } from "@/contexts/auth.context";
import { useEffect, useState } from "react";

export default function useAuth() {
  const [auth, setAuth] = useState<AuthContext | null>(null);

  async function getAuth() {
    const res = await fetch("/api/auth");
    const auth = await res.json();
    setAuth(auth);
  }
}
