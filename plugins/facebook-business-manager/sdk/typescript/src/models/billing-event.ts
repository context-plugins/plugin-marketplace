import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The event used for billing */
export const BillingEvent = {
  Impressions: "IMPRESSIONS",
  LinkClicks: "LINK_CLICKS",
} as const;
export type BillingEvent = (typeof BillingEvent)[keyof typeof BillingEvent] | (string & {});

export const billingEventSchema: EnumSchema<BillingEvent> = s.enumOf<BillingEvent>(BillingEvent);
