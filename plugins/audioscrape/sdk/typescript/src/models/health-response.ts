import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HealthResponse = {
  /** Always `"healthy"` if the server is responding. */
  status: string;
  /** RFC 3339 timestamp at which the health check was generated. */
  timestamp: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const healthResponseSchema: Schema<HealthResponse> = s.object<HealthResponse>(
  {
    status: s.string(),
    timestamp: s.string(),
  },
  { additionalProperties: s.json() },
);
