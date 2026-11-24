import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusJuriSignWebhooksApiSchema,
  type StatusJuriSignWebhooksApi,
} from "./status-juri-sign-webhooks-api.js";

export type WebhookLog = {
  id?: number;
  event?: string;
  status?: StatusJuriSignWebhooksApi;
  responseStatus?: number | null;
  attempts?: number;
  nextRetryAt?: Date | null;
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookLogSchema: Schema<WebhookLog> = s.object<WebhookLog>(
  {
    id: s.optional(s.int()),
    event: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusJuriSignWebhooksApiSchema)),
    responseStatus: s.optionalNullable(s.int()),
    attempts: s.optional(s.int()),
    nextRetryAt: s.optionalNullable(s.dateTime()),
    createdAt: s.optional(s.dateTime()),
    _keysMap: {
      responseStatus: "response_status",
      nextRetryAt: "next_retry_at",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
