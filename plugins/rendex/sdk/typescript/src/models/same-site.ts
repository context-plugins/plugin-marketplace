import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SameSite = {
  Strict: "Strict",
  Lax: "Lax",
  None: "None",
} as const;
export type SameSite = (typeof SameSite)[keyof typeof SameSite] | (string & {});

export const sameSiteSchema: EnumSchema<SameSite> = s.enumOf<SameSite>(SameSite);
