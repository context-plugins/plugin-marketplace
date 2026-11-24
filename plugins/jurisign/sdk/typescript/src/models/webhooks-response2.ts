import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  webhookEndpointInternalSchema,
  webhookEndpointSchema,
  type WebhookEndpoint,
} from "./webhook-endpoint.js";

export type WebhooksResponse2 = {
  data?: WebhookEndpoint;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhooksResponse2Properties: s.Shape<WebhooksResponse2> = {
  data: s.optional(s.lazy(() => webhookEndpointInternalSchema)),
};

export const webhooksResponse2InternalSchema: Schema<WebhooksResponse2> = s.object<WebhooksResponse2>(
  webhooksResponse2Properties,
  { additionalProperties: s.json() },
);

export const webhooksResponse2Schema: Schema<WebhooksResponse2> = s.lazySchema(() =>
  s.object<WebhooksResponse2>(
    {
      ...webhooksResponse2Properties,
      data: s.optional(s.lazy(() => webhookEndpointSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
