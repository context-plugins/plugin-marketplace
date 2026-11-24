import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1EarthquakeResponse = {
  /** status */
  status?: string;
  /** error */
  error?: string;
  /** data */
  data?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1EarthquakeResponseSchema: Schema<V1EarthquakeResponse> = s.object<V1EarthquakeResponse>(
  {
    status: s.optional(s.string()),
    error: s.optional(s.string()),
    data: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
