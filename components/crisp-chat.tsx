"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b3301b0e-f578-4fde-8694-a4f2730de61b");
  }, []);

  return null;
};
