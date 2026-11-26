import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { recipientSchema, type Recipient } from "./recipient.js";
import { replyToSchema, type ReplyTo } from "./reply-to.js";

/** Send an invoice to a customer */
export type SendInvoiceRequestDto = {
  replyTo: ReplyTo;
  recipient: Recipient;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sendInvoiceRequestDtoSchema: Schema<SendInvoiceRequestDto> = s.object<SendInvoiceRequestDto>(
  {
    replyTo: replyToSchema,
    recipient: recipientSchema,
  },
  { additionalProperties: s.json() },
);
