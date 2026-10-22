import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Invoice number or Purchase Order number. */
export type PurchaseOrderNumber1 = string;

export const purchaseOrderNumber1Schema: Schema<PurchaseOrderNumber1> = s.of<PurchaseOrderNumber1>(
  s.union([s.string()]),
);
