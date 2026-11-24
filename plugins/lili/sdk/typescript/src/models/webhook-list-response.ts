import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  webhookResponseInternalSchema,
  webhookResponseSchema,
  type WebhookResponse,
} from "./webhook-response.js";

export type WebhookListResponse = {
  webhookList?: WebhookResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookListResponseProperties: s.Shape<WebhookListResponse> = {
  webhookList: s.optional(s.array(s.lazy(() => webhookResponseInternalSchema))),
};

export const webhookListResponseInternalSchema: Schema<WebhookListResponse> = s.object<WebhookListResponse>(
  webhookListResponseProperties,
  { additionalProperties: s.json() },
);

export const webhookListResponseSchema: Schema<WebhookListResponse> = s.lazySchema(() =>
  s.object<WebhookListResponse>(
    {
      ...webhookListResponseProperties,
      webhookList: s.optional(s.array(s.lazy(() => webhookResponseSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
