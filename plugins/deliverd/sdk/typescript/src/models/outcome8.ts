import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * applied (the default) carries the result into the parent; kept records it as reference only;
 * discarded records that it was not used
 */
export const Outcome8 = {
  Applied: "applied",
  Kept: "kept",
  Discarded: "discarded",
} as const;
export type Outcome8 = (typeof Outcome8)[keyof typeof Outcome8] | (string & {});

export const outcome8Schema: EnumSchema<Outcome8> = s.enumOf<Outcome8>(Outcome8);
