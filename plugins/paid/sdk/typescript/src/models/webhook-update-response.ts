import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookDeliveryStatusSchema, type WebhookDeliveryStatus } from "./webhook-delivery-status.js";
import {
  webhookUpdateResponseNameSchema,
  type WebhookUpdateResponseName,
} from "./webhook-update-response-name.js";

export type WebhookUpdateResponse = {
  id: string;
  name: WebhookUpdateResponseName;
  description: string;
  enabled: boolean;
  url: string | null;
  lastSentAt: Date | null;
  lastStatus: WebhookDeliveryStatus;
  /**
   * Included on the response of the first save that produced a signing key for this organization
   * (when no webhook had a key yet). Store it now — subsequent reads will not return it; rotate to
   * mint a new one if you lose it.
   */
  signingSecret?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookUpdateResponseSchema: Schema<WebhookUpdateResponse> = s.object<WebhookUpdateResponse>(
  {
    id: s.string(),
    name: webhookUpdateResponseNameSchema,
    description: s.string(),
    enabled: s.boolean(),
    url: s.nullable(s.string()),
    lastSentAt: s.nullable(s.dateTime()),
    lastStatus: webhookDeliveryStatusSchema,
    signingSecret: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
