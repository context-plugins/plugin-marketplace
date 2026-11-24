import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";
import {
  formatDeliverdDevWebhookEndpointsApiSchema,
  type FormatDeliverdDevWebhookEndpointsApi,
} from "./format-deliverd-dev-webhook-endpoints-api.js";

export type ApiV1WebhookEndpointsResponse1 = {
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
  /**
   * The signing secret (dlvw_…). Returned by this response only: no other call returns it, and it
   * cannot be retrieved afterwards.
   */
  secret: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1WebhookEndpointsResponse1Schema: Schema<ApiV1WebhookEndpointsResponse1> =
  s.object<ApiV1WebhookEndpointsResponse1>(
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
      secret: s.string(),
    },
    { additionalProperties: s.json() },
  );
