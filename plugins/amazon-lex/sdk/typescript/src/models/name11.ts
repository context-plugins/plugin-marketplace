import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The metric that you requested. Count – The number of times the intent stage occurred. Success –
 * The number of times the intent stage succeeded. Failure – The number of times the intent stage
 * failed. Dropped – The number of times the user dropped the intent stage. Retry – The number of
 * times the bot tried to elicit a response from the user at this stage.
 */
export const Name11 = {
  Count: "Count",
  Success: "Success",
  Failed: "Failed",
  Dropped: "Dropped",
  Retry: "Retry",
} as const;
export type Name11 = (typeof Name11)[keyof typeof Name11] | (string & {});

export const name11Schema: EnumSchema<Name11> = s.enumOf<Name11>(Name11);
