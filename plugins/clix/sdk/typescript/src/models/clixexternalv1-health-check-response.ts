import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Clixexternalv1HealthCheckResponse = {
  msg?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clixexternalv1HealthCheckResponseSchema: Schema<Clixexternalv1HealthCheckResponse> =
  s.object<Clixexternalv1HealthCheckResponse>(
    {
      msg: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
