import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  webhookResponseInternalSchema,
  webhookResponseSchema,
  type WebhookResponse,
} from "./webhook-response.js";

export type WebhooksResponse1 = {
  data?: WebhookResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhooksResponse1Properties: s.Shape<WebhooksResponse1> = {
  data: s.optional(s.lazy(() => webhookResponseInternalSchema)),
};

export const webhooksResponse1InternalSchema: Schema<WebhooksResponse1> = s.object<WebhooksResponse1>(
  webhooksResponse1Properties,
  { additionalProperties: s.json() },
);

export const webhooksResponse1Schema: Schema<WebhooksResponse1> = s.lazySchema(() =>
  s.object<WebhooksResponse1>(
    {
      ...webhooksResponse1Properties,
      data: s.optional(s.lazy(() => webhookResponseSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
