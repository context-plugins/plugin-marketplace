import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HealthResponse = {
  status?: string;
  api?: string;
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const healthResponseSchema: Schema<HealthResponse> = s.object<HealthResponse>(
  {
    status: s.optional(s.string()),
    api: s.optional(s.string()),
    timestamp: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
