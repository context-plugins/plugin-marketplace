import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * When you send a request to create a bot with processBehavior set to BUILD, Amazon Lex sets the
 * status response element to BUILDING. In the READY_BASIC_TESTING state you can test the bot with
 * user inputs that exactly match the utterances configured for the bot's intents and values in the
 * slot types. If Amazon Lex can't build the bot, Amazon Lex sets status to FAILED. Amazon Lex
 * returns the reason for the failure in the failureReason response element. When you set
 * processBehavior to SAVE, Amazon Lex sets the status code to NOT BUILT. When the bot is in the
 * READY state you can test and publish th
 */
export const Status3 = {
  Building: "BUILDING",
  Ready: "READY",
  ReadyBasicTesting: "READY_BASIC_TESTING",
  Failed: "FAILED",
  NotBuilt: "NOT_BUILT",
} as const;
export type Status3 = (typeof Status3)[keyof typeof Status3] | (string & {});

export const status3Schema: EnumSchema<Status3> = s.enumOf<Status3>(Status3);
