import { Link } from "react-router-dom";

export default function RegisterView() {
  return (
    <>
      <nav>
        <Link to="/auth/login">¿Ya tienes cuenta? Inicia Sesión</Link>
      </nav>
    </>
  );
}
