import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1HealthResponse = {
  /** @default "ok" */
  status?: "ok";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1HealthResponseSchema: Schema<ApiV1HealthResponse> = s.object<ApiV1HealthResponse>(
  {
    status: s.defaulted(s.literal("ok"), "ok"),
  },
  { additionalProperties: s.json() },
);
