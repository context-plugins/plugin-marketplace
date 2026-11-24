import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entityRazorpayPartnerWebhooksApiSchema,
  type EntityRazorpayPartnerWebhooksApi,
} from "./entity-razorpay-partner-webhooks-api.js";

/**
 * A webhook configured for a sub-merchant account via the Partners API. Maximum 30 webhooks per
 * account.
 */
export type PartnerWebhook = {
  /** Webhook ID, max 14 characters */
  id?: string;
  entity?: EntityRazorpayPartnerWebhooksApi;
  ownerId?: string;
  ownerType?: string;
  /** HTTPS URL to receive webhook events */
  url?: string;
  alertEmail?: string;
  /** Shared secret for HMAC verification (write-only) */
  secret?: string;
  secretExists?: boolean;
  active?: boolean;
  /** Map of event names to boolean */
  events?: Record<string, boolean>;
  service?: string;
  context?: string[];
  disabledAt?: number;
  createdAt?: number;
  updatedAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const partnerWebhookSchema: Schema<PartnerWebhook> = s.object<PartnerWebhook>(
  {
    id: s.optional(s.string()),
    entity: s.optional(s.lazy(() => entityRazorpayPartnerWebhooksApiSchema)),
    ownerId: s.optional(s.string()),
    ownerType: s.optional(s.string()),
    url: s.optional(s.string()),
    alertEmail: s.optional(s.string()),
    secret: s.optional(s.string()),
    secretExists: s.optional(s.boolean()),
    active: s.optional(s.boolean()),
    events: s.optional(s.record(s.string(), s.boolean())),
    service: s.optional(s.string()),
    context: s.optional(s.array(s.string())),
    disabledAt: s.optional(s.int()),
    createdAt: s.optional(s.int()),
    updatedAt: s.optional(s.int()),
    _keysMap: {
      ownerId: "owner_id",
      ownerType: "owner_type",
      alertEmail: "alert_email",
      secretExists: "secret_exists",
      disabledAt: "disabled_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
