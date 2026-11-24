import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Action applied when the category is matched */
export const Restriction3 = {
  Allow: "ALLOW",
  Block: "BLOCK",
  Warning: "WARNING",
} as const;
export type Restriction3 = (typeof Restriction3)[keyof typeof Restriction3] | (string & {});

export const restriction3Schema: EnumSchema<Restriction3> = s.enumOf<Restriction3>(Restriction3);
