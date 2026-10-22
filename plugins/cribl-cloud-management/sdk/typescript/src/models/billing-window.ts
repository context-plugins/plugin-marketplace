import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BillingWindow = {
  Monthly: "monthly",
  Daily: "daily",
} as const;
export type BillingWindow = (typeof BillingWindow)[keyof typeof BillingWindow] | (string & {});

export const billingWindowSchema: EnumSchema<BillingWindow> = s.enumOf<BillingWindow>(BillingWindow);
