import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the fulfillment state for the intent. The meanings of each value are as follows: Failed
 * – The bot failed to fulfill the intent. Fulfilled – The bot has completed fulfillment of the
 * intent. FulfillmentInProgress – The bot is in the middle of fulfilling the intent. InProgress –
 * The bot is in the middle of eliciting the slot values that are necessary to fulfill the intent.
 * ReadyForFulfillment – The bot has elicited all the slot values for the intent and is ready to
 * fulfill the intent. Waiting – The bot is waiting for a response from the user (limited to
 * streaming conversations).
 */
export const State = {
  Failed: "Failed",
  Fulfilled: "Fulfilled",
  InProgress: "InProgress",
  ReadyForFulfillment: "ReadyForFulfillment",
  Waiting: "Waiting",
  FulfillmentInProgress: "FulfillmentInProgress",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);
