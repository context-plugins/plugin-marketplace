import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * When you send a request to create or update a bot, Amazon Lex sets the status response element to
 * BUILDING. After Amazon Lex builds the bot, it sets status to READY. If Amazon Lex can't build the
 * bot, it sets status to FAILED. Amazon Lex returns the reason for the failure in the failureReason
 * response element.
 */
export const Status1 = {
  Building: "BUILDING",
  Ready: "READY",
  ReadyBasicTesting: "READY_BASIC_TESTING",
  Failed: "FAILED",
  NotBuilt: "NOT_BUILT",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
