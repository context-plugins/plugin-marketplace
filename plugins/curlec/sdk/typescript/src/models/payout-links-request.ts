import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PayoutLinksRequest = {
  contactId: string;
  /** Amount in paise */
  amount: number;
  /** @default "INR" */
  currency?: "INR";
  purpose: string;
  description?: string;
  receipt?: string;
  sendSms?: boolean;
  sendEmail?: boolean;
  notes?: Record<string, unknown>;
  /** Unix timestamp; must be ≥15 minutes from now */
  expireBy?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const payoutLinksRequestSchema: Schema<PayoutLinksRequest> = s.object<PayoutLinksRequest>(
  {
    contactId: s.string(),
    amount: s.int(),
    currency: s.defaulted(s.literal("INR"), "INR"),
    purpose: s.string(),
    description: s.optional(s.string()),
    receipt: s.optional(s.string()),
    sendSms: s.optional(s.boolean()),
    sendEmail: s.optional(s.boolean()),
    notes: s.optional(s.record(s.string(), s.unknown())),
    expireBy: s.optional(s.int()),
    _keysMap: {
      contactId: "contact_id",
      sendSms: "send_sms",
      sendEmail: "send_email",
      expireBy: "expire_by",
    },
  },
  { additionalProperties: s.json() },
);
