import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  errorDeliverdDevWebhookEndpointsApiSchema,
  type ErrorDeliverdDevWebhookEndpointsApi,
} from "./error-deliverd-dev-webhook-endpoints-api.js";

export type ApiV1WebhookEndpoints403Error = {
  error: ErrorDeliverdDevWebhookEndpointsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1WebhookEndpoints403ErrorSchema: Schema<ApiV1WebhookEndpoints403Error> =
  s.object<ApiV1WebhookEndpoints403Error>(
    {
      error: errorDeliverdDevWebhookEndpointsApiSchema,
    },
    { additionalProperties: s.json() },
  );
