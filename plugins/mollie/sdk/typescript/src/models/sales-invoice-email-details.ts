import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SalesInvoiceEmailDetails = {
  /** The subject of the email to be sent. */
  subject: string;
  /** The body of the email to be sent. To add newline characters, you can use `\n`. */
  body: string;
};

export const salesInvoiceEmailDetailsSchema: Schema<SalesInvoiceEmailDetails> =
  s.object<SalesInvoiceEmailDetails>({
    subject: s.string(),
    body: s.string(),
  });
