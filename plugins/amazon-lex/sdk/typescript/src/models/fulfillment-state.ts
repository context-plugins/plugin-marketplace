import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The fulfillment state of the intent. The possible values are: Failed - The Lambda function
 * associated with the intent failed to fulfill the intent. Fulfilled - The intent has fulfilled by
 * the Lambda function associated with the intent. ReadyForFulfillment - All of the information
 * necessary for the intent is present and the intent ready to be fulfilled by the client
 * application.
 */
export const FulfillmentState = {
  Fulfilled: "Fulfilled",
  Failed: "Failed",
  ReadyForFulfillment: "ReadyForFulfillment",
} as const;
export type FulfillmentState = (typeof FulfillmentState)[keyof typeof FulfillmentState] | (string & {});

export const fulfillmentStateSchema: EnumSchema<FulfillmentState> =
  s.enumOf<FulfillmentState>(FulfillmentState);
