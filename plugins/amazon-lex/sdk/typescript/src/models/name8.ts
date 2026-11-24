import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A category by which the intent stage analytics were grouped. */
export const Name8 = {
  IntentStageName: "IntentStageName",
  SwitchedToIntent: "SwitchedToIntent",
} as const;
export type Name8 = (typeof Name8)[keyof typeof Name8] | (string & {});

export const name8Schema: EnumSchema<Name8> = s.enumOf<Name8>(Name8);
