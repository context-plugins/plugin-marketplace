import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The metric for which you want to get intent summary statistics. Count – The number of times the
 * intent was invoked. Success – The number of times the intent succeeded. Failure – The number of
 * times the intent failed. Switched – The number of times there was a switch to a different intent.
 * Dropped – The number of times the user dropped the intent.
 */
export const Name5 = {
  Count: "Count",
  Success: "Success",
  Failure: "Failure",
  Switched: "Switched",
  Dropped: "Dropped",
} as const;
export type Name5 = (typeof Name5)[keyof typeof Name5] | (string & {});

export const name5Schema: EnumSchema<Name5> = s.enumOf<Name5>(Name5);
