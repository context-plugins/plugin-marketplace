import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** User provided options for sending an email. */
export type InvoiceProcessingOptions = {
  /** Set as `true` to send an email to the customer */
  sendEmail?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invoiceProcessingOptionsSchema: Schema<InvoiceProcessingOptions> =
  s.object<InvoiceProcessingOptions>(
    {
      sendEmail: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
