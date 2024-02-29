"use client";

import { Zap } from "lucide-react";
import axios from "axios";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

interface SubscriptionButtonProps {
  isPro: boolean;
}

export const SubscriptionButton = ({ isPro }: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Ocorreu um erro ao gerenciar sua assinatura.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      disabled={loading}
      variant={isPro ? "default" : "premium"}
      onClick={onClick}
    >
      {isPro ? "Gerenciar assinatura" : "Upgrade para pro"}
      {!isPro && <Zap className="h-4 w-4 ml-2 fill-white" />}
    </Button>
  );
};
