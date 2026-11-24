import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data5Schema, type Data5 } from "./data5.js";
import { webhookEventTypeSchema, type WebhookEventType } from "./webhook-event-type.js";

export type ConnectionUpdatedRequest = {
  /** Event ID (`evt_…`). De-duplicate by it. */
  id: string;
  type: WebhookEventType;
  /** When the event happened. */
  createdAt: Date;
  data: Data5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const connectionUpdatedRequestSchema: Schema<ConnectionUpdatedRequest> =
  s.object<ConnectionUpdatedRequest>(
    {
      id: s.string(),
      type: webhookEventTypeSchema,
      createdAt: s.dateTime(),
      data: data5Schema,
      _keysMap: {
        createdAt: "created_at",
      },
    },
    { additionalProperties: s.json() },
  );
