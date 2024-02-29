import { Settings } from "lucide-react";
import { checkSubscription } from "@/lib/subscription";

import Heading from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div>
      <Heading
        title="Configurações"
        description="Configurações de sua conta."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="space-y-4 px-4 lg:px-8">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "Você está atualmente em um plano pro."
            : "Você está atualmente em um plano gratuito."}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default SettingsPage;
