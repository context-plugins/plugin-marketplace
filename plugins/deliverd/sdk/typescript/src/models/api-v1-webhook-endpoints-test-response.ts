import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1WebhookEndpointsTestResponse = {
  /** Whether the endpoint answered 2xx. */
  delivered: boolean;
  /** What it answered. Null when it could not be reached. */
  responseStatus: number | null;
  error: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1WebhookEndpointsTestResponseSchema: Schema<ApiV1WebhookEndpointsTestResponse> =
  s.object<ApiV1WebhookEndpointsTestResponse>(
    {
      delivered: s.boolean(),
      responseStatus: s.nullable(s.int()),
      error: s.nullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
