import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      Landing Page (Unprotected)
      <div>
        <Link href="/sign-in">
          <Button>Entrar</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Cadastre-se</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
