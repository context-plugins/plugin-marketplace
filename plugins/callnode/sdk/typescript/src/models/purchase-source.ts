import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How the number was purchased — via the dashboard (`web`) or this API (`api`). */
export const PurchaseSource = {
  Web: "web",
  Api: "api",
} as const;
export type PurchaseSource = (typeof PurchaseSource)[keyof typeof PurchaseSource] | (string & {});

export const purchaseSourceSchema: EnumSchema<PurchaseSource> = s.enumOf<PurchaseSource>(PurchaseSource);
