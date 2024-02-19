import * as z from "zod";

export const formsSchema = z.object({
  prompt: z.string().min(1, {
    message: "Por favor, digite algo para o prompt.",
  }),
});
