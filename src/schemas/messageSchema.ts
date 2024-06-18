import { Content } from "next/font/google";
import { z } from "zod";

export const MessageSchema = z.object({
  content: z
    .string()
    .min(10, "content must be atleast of 10 characters")
    .max(300,"content must be no  longer than 300 characters"),
});
