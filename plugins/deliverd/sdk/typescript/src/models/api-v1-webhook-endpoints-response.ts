import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookEndpointSchema, type WebhookEndpoint } from "./webhook-endpoint.js";

export type ApiV1WebhookEndpointsResponse = {
  webhookEndpoints: WebhookEndpoint[];
  /** Pass back as ?cursor= for the next page. Null means this is the end. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1WebhookEndpointsResponseSchema: Schema<ApiV1WebhookEndpointsResponse> =
  s.object<ApiV1WebhookEndpointsResponse>(
    {
      webhookEndpoints: s.array(s.lazy(() => webhookEndpointSchema)),
      nextCursor: s.nullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
