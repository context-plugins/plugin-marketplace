import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A category by which the intent analytics were grouped. */
export const Name3 = {
  IntentName: "IntentName",
  IntentEndState: "IntentEndState",
  IntentLevel: "IntentLevel",
} as const;
export type Name3 = (typeof Name3)[keyof typeof Name3] | (string & {});

export const name3Schema: EnumSchema<Name3> = s.enumOf<Name3>(Name3);
