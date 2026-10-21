import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Author = {
  User: "USER",
  GleanAi: "GLEAN_AI",
} as const;
export type Author = (typeof Author)[keyof typeof Author] | (string & {});

export const authorSchema: EnumSchema<Author> = s.enumOf<Author>(Author);
