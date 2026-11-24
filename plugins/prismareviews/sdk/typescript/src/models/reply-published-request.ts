import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";
import { webhookEventTypeSchema, type WebhookEventType } from "./webhook-event-type.js";

export type ReplyPublishedRequest = {
  /** Event ID (`evt_…`). De-duplicate by it. */
  id: string;
  type: WebhookEventType;
  /** When the event happened. */
  createdAt: Date;
  data: Data;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const replyPublishedRequestSchema: Schema<ReplyPublishedRequest> = s.object<ReplyPublishedRequest>(
  {
    id: s.string(),
    type: webhookEventTypeSchema,
    createdAt: s.dateTime(),
    data: dataSchema,
    _keysMap: {
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
