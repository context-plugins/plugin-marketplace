import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";
import {
  formatDeliverdDevWebhookEndpointsApiSchema,
  type FormatDeliverdDevWebhookEndpointsApi,
} from "./format-deliverd-dev-webhook-endpoints-api.js";

export type WebhookEndpoint = {
  id: string;
  url: string;
  description: string | null;
  /** Empty means every event except the opt-in ones. */
  events: Event[];
  format: FormatDeliverdDevWebhookEndpointsApi;
  enabled: boolean;
  /** Consecutive failed deliveries. At twenty the endpoint is switched off. */
  failureCount: number;
  lastSuccessAt: string | null;
  lastFailureAt: string | null;
  lastError: string | null;
  createdAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookEndpointSchema: Schema<WebhookEndpoint> = s.object<WebhookEndpoint>(
  {
    id: s.string(),
    url: s.string(),
    description: s.nullable(s.string()),
    events: s.array(s.lazy(() => eventSchema)),
    format: formatDeliverdDevWebhookEndpointsApiSchema,
    enabled: s.boolean(),
    failureCount: s.int(),
    lastSuccessAt: s.nullable(s.string()),
    lastFailureAt: s.nullable(s.string()),
    lastError: s.nullable(s.string()),
    createdAt: s.string(),
  },
  { additionalProperties: s.json() },
);
