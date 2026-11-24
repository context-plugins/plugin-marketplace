import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookEventTypeSchema, type WebhookEventType } from "./webhook-event-type.js";

/**
 * The body of a webhook delivery. Events carry IDs, not full objects; retries keep the same `id`.
 */
export type WebhookEvent = {
  /** Event ID (`evt_…`). De-duplicate by it. */
  id: string;
  type: WebhookEventType;
  /** When the event happened. */
  createdAt: Date;
  data: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookEventSchema: Schema<WebhookEvent> = s.object<WebhookEvent>(
  {
    id: s.string(),
    type: webhookEventTypeSchema,
    createdAt: s.dateTime(),
    data: s.record(s.string(), s.unknown()),
    _keysMap: {
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
