import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoiceTaxStatus = {
  NotApplicable: "not_applicable",
  Calculated: "calculated",
  Committed: "committed",
  Failed: "failed",
  Voided: "voided",
} as const;
export type InvoiceTaxStatus = (typeof InvoiceTaxStatus)[keyof typeof InvoiceTaxStatus] | (string & {});

export const invoiceTaxStatusSchema: EnumSchema<InvoiceTaxStatus> =
  s.enumOf<InvoiceTaxStatus>(InvoiceTaxStatus);
