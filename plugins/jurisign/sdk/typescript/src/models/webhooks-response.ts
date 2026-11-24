import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  webhookEndpointInternalSchema,
  webhookEndpointSchema,
  type WebhookEndpoint,
} from "./webhook-endpoint.js";

export type WebhooksResponse = {
  data?: WebhookEndpoint[];
  availableEvents?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhooksResponseProperties: s.Shape<WebhooksResponse> = {
  data: s.optional(s.array(s.lazy(() => webhookEndpointInternalSchema))),
  availableEvents: s.optional(s.array(s.string())),
  _keysMap: {
    availableEvents: "available_events",
  },
};

export const webhooksResponseInternalSchema: Schema<WebhooksResponse> = s.object<WebhooksResponse>(
  webhooksResponseProperties,
  { additionalProperties: s.json() },
);

export const webhooksResponseSchema: Schema<WebhooksResponse> = s.lazySchema(() =>
  s.object<WebhooksResponse>(
    {
      ...webhooksResponseProperties,
      data: s.optional(s.array(s.lazy(() => webhookEndpointSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
