import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data4Schema, type Data4 } from "./data4.js";
import { webhookEventTypeSchema, type WebhookEventType } from "./webhook-event-type.js";

export type ReplyUnknownRequest = {
  /** Event ID (`evt_…`). De-duplicate by it. */
  id: string;
  type: WebhookEventType;
  /** When the event happened. */
  createdAt: Date;
  data: Data4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const replyUnknownRequestSchema: Schema<ReplyUnknownRequest> = s.object<ReplyUnknownRequest>(
  {
    id: s.string(),
    type: webhookEventTypeSchema,
    createdAt: s.dateTime(),
    data: data4Schema,
    _keysMap: {
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
