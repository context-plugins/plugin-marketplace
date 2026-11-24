import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies whether to group the intent stages by their name or the intent to which the session was
 * switched.
 */
export const Name9 = {
  IntentStageName: "IntentStageName",
  SwitchedToIntent: "SwitchedToIntent",
} as const;
export type Name9 = (typeof Name9)[keyof typeof Name9] | (string & {});

export const name9Schema: EnumSchema<Name9> = s.enumOf<Name9>(Name9);
