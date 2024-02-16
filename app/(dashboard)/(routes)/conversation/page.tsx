import { MessageSquare } from "lucide-react";

import Heading from "@/components/Heading";
import { Form } from "@/components/ui/form";

const ConversationPage = () => {
  return (
    <div>
      <Heading
        title="Conversação"
        description="Nosso modelo de conversação mais avançado."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">{/* <Form /> */}</div>
    </div>
  );
};

export default ConversationPage;
