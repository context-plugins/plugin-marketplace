import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Passes the `transaction.purchaseOrderNumber` field when creating a new transaction. */
export type PurchaseOrderNumber = string;

export const purchaseOrderNumberSchema: Schema<PurchaseOrderNumber> = s.of<PurchaseOrderNumber>(
  s.union([s.string()]),
);
