import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  webhookResponseInternalSchema,
  webhookResponseSchema,
  type WebhookResponse,
} from "./webhook-response.js";

export type WebhooksResponse = {
  data?: WebhookResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhooksResponseProperties: s.Shape<WebhooksResponse> = {
  data: s.optional(s.array(s.lazy(() => webhookResponseInternalSchema))),
};

export const webhooksResponseInternalSchema: Schema<WebhooksResponse> = s.object<WebhooksResponse>(
  webhooksResponseProperties,
  { additionalProperties: s.json() },
);

export const webhooksResponseSchema: Schema<WebhooksResponse> = s.lazySchema(() =>
  s.object<WebhooksResponse>(
    {
      ...webhooksResponseProperties,
      data: s.optional(s.array(s.lazy(() => webhookResponseSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
