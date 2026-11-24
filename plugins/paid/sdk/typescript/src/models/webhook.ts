import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookDeliveryStatusSchema, type WebhookDeliveryStatus } from "./webhook-delivery-status.js";
import { webhookNameSchema, type WebhookName } from "./webhook-name.js";

export type Webhook = {
  id: string;
  name: WebhookName;
  description: string;
  enabled: boolean;
  url: string | null;
  lastSentAt: Date | null;
  lastStatus: WebhookDeliveryStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookSchema: Schema<Webhook> = s.object<Webhook>(
  {
    id: s.string(),
    name: webhookNameSchema,
    description: s.string(),
    enabled: s.boolean(),
    url: s.nullable(s.string()),
    lastSentAt: s.nullable(s.dateTime()),
    lastStatus: webhookDeliveryStatusSchema,
  },
  { additionalProperties: s.json() },
);
