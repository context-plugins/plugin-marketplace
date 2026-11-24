import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  webhookEndpointInternalSchema,
  webhookEndpointSchema,
  type WebhookEndpoint,
} from "./webhook-endpoint.js";

export type WebhooksResponse1 = {
  data?: WebhookEndpoint;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhooksResponse1Properties: s.Shape<WebhooksResponse1> = {
  data: s.optional(s.lazy(() => webhookEndpointInternalSchema)),
  message: s.optional(s.string()),
};

export const webhooksResponse1InternalSchema: Schema<WebhooksResponse1> = s.object<WebhooksResponse1>(
  webhooksResponse1Properties,
  { additionalProperties: s.json() },
);

export const webhooksResponse1Schema: Schema<WebhooksResponse1> = s.lazySchema(() =>
  s.object<WebhooksResponse1>(
    {
      ...webhooksResponse1Properties,
      data: s.optional(s.lazy(() => webhookEndpointSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
