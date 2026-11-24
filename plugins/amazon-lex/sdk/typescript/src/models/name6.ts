import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The metric that you requested. See Key definitions for more details about these metrics. Count –
 * The number of times the intent was invoked. Success – The number of times the intent succeeded.
 * Failure – The number of times the intent failed. Switched – The number of times there was a
 * switch to a different intent. Dropped – The number of times the user dropped the intent.
 */
export const Name6 = {
  Count: "Count",
  Success: "Success",
  Failure: "Failure",
  Switched: "Switched",
  Dropped: "Dropped",
} as const;
export type Name6 = (typeof Name6)[keyof typeof Name6] | (string & {});

export const name6Schema: EnumSchema<Name6> = s.enumOf<Name6>(Name6);
