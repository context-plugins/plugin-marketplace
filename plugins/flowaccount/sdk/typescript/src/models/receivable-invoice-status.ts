import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = Awaiting 3 = Approved 5 = ApprovedAndProcessed 7 = Void 9 = Delete */
export const ReceivableInvoiceStatus = {
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
  _9: 9,
} as const;
export type ReceivableInvoiceStatus =
  | (typeof ReceivableInvoiceStatus)[keyof typeof ReceivableInvoiceStatus]
  | (number & {});

export const receivableInvoiceStatusSchema: EnumSchema<ReceivableInvoiceStatus> =
  s.enumOf<ReceivableInvoiceStatus>(ReceivableInvoiceStatus);
