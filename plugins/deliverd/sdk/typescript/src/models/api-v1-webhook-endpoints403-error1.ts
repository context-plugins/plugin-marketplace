import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  errorDeliverdDevWebhookEndpointsApiSchema,
  type ErrorDeliverdDevWebhookEndpointsApi,
} from "./error-deliverd-dev-webhook-endpoints-api.js";

export type ApiV1WebhookEndpoints403Error1 = {
  error: ErrorDeliverdDevWebhookEndpointsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1WebhookEndpoints403Error1Schema: Schema<ApiV1WebhookEndpoints403Error1> =
  s.object<ApiV1WebhookEndpoints403Error1>(
    {
      error: errorDeliverdDevWebhookEndpointsApiSchema,
    },
    { additionalProperties: s.json() },
  );
