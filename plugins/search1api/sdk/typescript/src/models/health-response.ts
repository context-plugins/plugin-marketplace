import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HealthResponse = {
  status: string;
  timestamp?: Date;
  version?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const healthResponseSchema: Schema<HealthResponse> = s.object<HealthResponse>(
  {
    status: s.string(),
    timestamp: s.optional(s.dateTime()),
    version: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
