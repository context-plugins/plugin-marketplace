import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactSchema, type Contact } from "./contact.js";
import {
  entityRazorpayXPayoutLinksApiSchema,
  type EntityRazorpayXPayoutLinksApi,
} from "./entity-razorpay-xpayout-links-api.js";
import {
  statusRazorpayXPayoutLinksApiSchema,
  type StatusRazorpayXPayoutLinksApi,
} from "./status-razorpay-xpayout-links-api.js";

/** Payout link sent to a contact when fund account details are unavailable. */
export type PayoutLink = {
  /** Payout link ID (poutlk_*) */
  id?: string;
  entity?: EntityRazorpayXPayoutLinksApi;
  contactId?: string;
  contact?: Contact;
  /** Amount in paise */
  amount?: number;
  currency?: string;
  purpose?: string;
  status?: StatusRazorpayXPayoutLinksApi;
  fundAccountId?: string;
  payoutId?: string;
  description?: string;
  receipt?: string;
  notes?: Record<string, unknown>;
  sendSms?: boolean;
  sendEmail?: boolean;
  shortUrl?: string;
  attemptCount?: number;
  createdAt?: number;
  cancelledAt?: number;
  /** Must be at least 15 minutes in the future */
  expireBy?: number;
  expiredAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const payoutLinkSchema: Schema<PayoutLink> = s.object<PayoutLink>(
  {
    id: s.optional(s.string()),
    entity: s.optional(s.lazy(() => entityRazorpayXPayoutLinksApiSchema)),
    contactId: s.optional(s.string()),
    contact: s.optional(s.lazy(() => contactSchema)),
    amount: s.optional(s.int()),
    currency: s.optional(s.string()),
    purpose: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusRazorpayXPayoutLinksApiSchema)),
    fundAccountId: s.optional(s.string()),
    payoutId: s.optional(s.string()),
    description: s.optional(s.string()),
    receipt: s.optional(s.string()),
    notes: s.optional(s.record(s.string(), s.unknown())),
    sendSms: s.optional(s.boolean()),
    sendEmail: s.optional(s.boolean()),
    shortUrl: s.optional(s.string()),
    attemptCount: s.optional(s.int()),
    createdAt: s.optional(s.int()),
    cancelledAt: s.optional(s.int()),
    expireBy: s.optional(s.int()),
    expiredAt: s.optional(s.int()),
    _keysMap: {
      contactId: "contact_id",
      fundAccountId: "fund_account_id",
      payoutId: "payout_id",
      sendSms: "send_sms",
      sendEmail: "send_email",
      shortUrl: "short_url",
      attemptCount: "attempt_count",
      createdAt: "created_at",
      cancelledAt: "cancelled_at",
      expireBy: "expire_by",
      expiredAt: "expired_at",
    },
  },
  { additionalProperties: s.json() },
);
