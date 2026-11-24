import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 0 = None 1 = Awaiting 3 = WaitingForRefund 5 = CreatedBatchFilling 7 = NoRefund */
export const SupplierInvoiceStatus = {
  _0: 0,
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
} as const;
export type SupplierInvoiceStatus =
  | (typeof SupplierInvoiceStatus)[keyof typeof SupplierInvoiceStatus]
  | (number & {});

export const supplierInvoiceStatusSchema: EnumSchema<SupplierInvoiceStatus> =
  s.enumOf<SupplierInvoiceStatus>(SupplierInvoiceStatus);
