import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BillingEvent1 = {
  Impressions: "IMPRESSIONS",
  LinkClicks: "LINK_CLICKS",
} as const;
export type BillingEvent1 = (typeof BillingEvent1)[keyof typeof BillingEvent1] | (string & {});

export const billingEvent1Schema: EnumSchema<BillingEvent1> = s.enumOf<BillingEvent1>(BillingEvent1);
