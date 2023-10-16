import { Position } from "@prisma/client";
import { z } from "zod";

export const createPlayerSchema = z.object({
  name: z.string().trim().min(3, "name must be at least 3 characters"),
  imageUrl: z.string().trim().url("image URL must be a valid URL"),
  position: z.nativeEnum(Position),
});

export type TCreatePlayerSchema = z.infer<typeof createPlayerSchema>;
