import { createContext, useContext } from "react";

export interface AuthContext {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  name: string | null;
}

const AuthContext = createContext<AuthContext>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  name: null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
