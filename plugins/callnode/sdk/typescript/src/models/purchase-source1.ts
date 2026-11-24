import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PurchaseSource1 = {
  Web: "web",
  Api: "api",
} as const;
export type PurchaseSource1 = (typeof PurchaseSource1)[keyof typeof PurchaseSource1] | (string & {});

export const purchaseSource1Schema: EnumSchema<PurchaseSource1> = s.enumOf<PurchaseSource1>(PurchaseSource1);
