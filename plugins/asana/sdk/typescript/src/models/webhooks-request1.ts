import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookUpdateRequestSchema, type WebhookUpdateRequest } from "./webhook-update-request.js";

export type WebhooksRequest1 = {
  data?: WebhookUpdateRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhooksRequest1Schema: Schema<WebhooksRequest1> = s.object<WebhooksRequest1>(
  {
    data: s.optional(s.lazy(() => webhookUpdateRequestSchema)),
  },
  { additionalProperties: s.json() },
);
