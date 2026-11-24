import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PendingBillingInterval = {
  Monthly: "MONTHLY",
  Yearly: "YEARLY",
} as const;
export type PendingBillingInterval =
  | (typeof PendingBillingInterval)[keyof typeof PendingBillingInterval]
  | (string & {});

export const pendingBillingIntervalSchema: EnumSchema<PendingBillingInterval> =
  s.enumOf<PendingBillingInterval>(PendingBillingInterval);
