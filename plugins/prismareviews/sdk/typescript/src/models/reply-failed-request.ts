import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data3Schema, type Data3 } from "./data3.js";
import { webhookEventTypeSchema, type WebhookEventType } from "./webhook-event-type.js";

export type ReplyFailedRequest = {
  /** Event ID (`evt_…`). De-duplicate by it. */
  id: string;
  type: WebhookEventType;
  /** When the event happened. */
  createdAt: Date;
  data: Data3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const replyFailedRequestSchema: Schema<ReplyFailedRequest> = s.object<ReplyFailedRequest>(
  {
    id: s.string(),
    type: webhookEventTypeSchema,
    createdAt: s.dateTime(),
    data: data3Schema,
    _keysMap: {
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
