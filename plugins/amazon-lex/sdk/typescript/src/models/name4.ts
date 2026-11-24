import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies whether to group the intent stages by their name or their end state. */
export const Name4 = {
  IntentName: "IntentName",
  IntentEndState: "IntentEndState",
  IntentLevel: "IntentLevel",
} as const;
export type Name4 = (typeof Name4)[keyof typeof Name4] | (string & {});

export const name4Schema: EnumSchema<Name4> = s.enumOf<Name4>(Name4);
