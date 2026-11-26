import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Invoice replyTo object. */
export type InvoiceReplyTo = {
  /**
   * BILL-generated ID of the user sending the invoice. The value begins with `006`.
   *
   * You can retrieve your user ID when you sign in with `/v3/login`.
   */
  userId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invoiceReplyToSchema: Schema<InvoiceReplyTo> = s.object<InvoiceReplyTo>(
  {
    userId: s.string(),
  },
  { additionalProperties: s.json() },
);
