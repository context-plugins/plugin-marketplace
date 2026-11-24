import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sentMessageSchema, type SentMessage } from "./sent-message.js";

export type ApiV2MessageRequestsResponse = {
  body?: string;
  category?: string;
  createdAt?: string;
  id?: string;
  phone?: string;
  scheduledAt?: string;
  sentMessage?: SentMessage;
  status?: string;
  /** @default 0 */
  statusCode?: number;
  subscriberId?: string;
  updatedAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2MessageRequestsResponseSchema: Schema<ApiV2MessageRequestsResponse> =
  s.object<ApiV2MessageRequestsResponse>(
    {
      body: s.optional(s.string()),
      category: s.optional(s.string()),
      createdAt: s.optional(s.string()),
      id: s.optional(s.string()),
      phone: s.optional(s.string()),
      scheduledAt: s.optional(s.string()),
      sentMessage: s.optional(s.lazy(() => sentMessageSchema)),
      status: s.optional(s.string()),
      statusCode: s.defaulted(s.int(), 0),
      subscriberId: s.optional(s.string()),
      updatedAt: s.optional(s.string()),
      _keysMap: {
        createdAt: "created_at",
        scheduledAt: "scheduled_at",
        sentMessage: "sent_message",
        statusCode: "status_code",
        subscriberId: "subscriber_id",
        updatedAt: "updated_at",
      },
    },
    { additionalProperties: s.json() },
  );
