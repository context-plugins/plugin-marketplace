import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The merchant's unique identifier for the sales order or invoice. */
export type SupplierOrderNumber = string;

export const supplierOrderNumberSchema: Schema<SupplierOrderNumber> = s.of<SupplierOrderNumber>(
  s.union([s.string()]),
);
