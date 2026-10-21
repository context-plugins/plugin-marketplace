import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Used when setting an invoice to status of either `issued` or `paid`. Will be used to issue the
 * invoice to the recipient with the provided `subject` and `body`. Required for `issued` status.
 */
export type SalesInvoiceEmailDetails1 = {
  /** The subject of the email to be sent. */
  subject: string;
  /** The body of the email to be sent. To add newline characters, you can use `\n`. */
  body: string;
};

export const salesInvoiceEmailDetails1Schema: Schema<SalesInvoiceEmailDetails1> =
  s.object<SalesInvoiceEmailDetails1>({
    subject: s.string(),
    body: s.string(),
  });
