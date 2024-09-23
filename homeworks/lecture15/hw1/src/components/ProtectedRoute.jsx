import { Navigate, useLocation } from "react-router-dom";
import { useMemo } from "react";

export default function ProtectedLayout({ children }) {
  const user = useMemo(() => localStorage.getItem("user"), []);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <div>{children}</div>;
}
