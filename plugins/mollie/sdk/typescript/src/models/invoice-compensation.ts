import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvoiceCompensation = {
  invoiceId?: string;
};

export const invoiceCompensationSchema: Schema<InvoiceCompensation> = s.object<InvoiceCompensation>({
  invoiceId: s.optional(s.string()),
});
