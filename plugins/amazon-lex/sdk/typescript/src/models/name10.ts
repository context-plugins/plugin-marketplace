import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The metric for which you want to get intent stage summary statistics. See Key definitions for
 * more details about these metrics. Count – The number of times the intent stage occurred. Success
 * – The number of times the intent stage succeeded. Failure – The number of times the intent stage
 * failed. Dropped – The number of times the user dropped the intent stage. Retry – The number of
 * times the bot tried to elicit a response from the user at this stage.
 */
export const Name10 = {
  Count: "Count",
  Success: "Success",
  Failed: "Failed",
  Dropped: "Dropped",
  Retry: "Retry",
} as const;
export type Name10 = (typeof Name10)[keyof typeof Name10] | (string & {});

export const name10Schema: EnumSchema<Name10> = s.enumOf<Name10>(Name10);
