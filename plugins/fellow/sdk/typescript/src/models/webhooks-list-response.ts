import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paginatedResponseWebhookSchema,
  type PaginatedResponseWebhook,
} from "./paginated-response-webhook.js";

/** Response containing a paginated list of webhooks. */
export type WebhooksListResponse = {
  webhooks: PaginatedResponseWebhook;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhooksListResponseSchema: Schema<WebhooksListResponse> = s.object<WebhooksListResponse>(
  {
    webhooks: paginatedResponseWebhookSchema,
  },
  { additionalProperties: s.json() },
);
