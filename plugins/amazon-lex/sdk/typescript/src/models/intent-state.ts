import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The state of the intent that the utterance is associated to. */
export const IntentState = {
  Failed: "Failed",
  Fulfilled: "Fulfilled",
  InProgress: "InProgress",
  ReadyForFulfillment: "ReadyForFulfillment",
  Waiting: "Waiting",
  FulfillmentInProgress: "FulfillmentInProgress",
} as const;
export type IntentState = (typeof IntentState)[keyof typeof IntentState] | (string & {});

export const intentStateSchema: EnumSchema<IntentState> = s.enumOf<IntentState>(IntentState);
