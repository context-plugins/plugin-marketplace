import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum for fulfillment type. */
export const FulfillmentTypeConnectEventsSubscriptionsApi = {
  Payroll: "PAYROLL",
  Ach: "ACH",
  Unspecified: "UNSPECIFIED",
} as const;
export type FulfillmentTypeConnectEventsSubscriptionsApi =
  | (typeof FulfillmentTypeConnectEventsSubscriptionsApi)[keyof typeof FulfillmentTypeConnectEventsSubscriptionsApi]
  | (string & {});

export const fulfillmentTypeConnectEventsSubscriptionsApiSchema: EnumSchema<FulfillmentTypeConnectEventsSubscriptionsApi> =
  s.enumOf<FulfillmentTypeConnectEventsSubscriptionsApi>(FulfillmentTypeConnectEventsSubscriptionsApi);
