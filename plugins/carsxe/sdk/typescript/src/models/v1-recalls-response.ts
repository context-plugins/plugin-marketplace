import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1RecallsResponse = {
  success?: boolean;
  input?: Record<string, unknown>;
  /** Recall report for the VIN. */
  data?: Record<string, unknown>;
  timestamp?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1RecallsResponseSchema: Schema<V1RecallsResponse> = s.object<V1RecallsResponse>(
  {
    success: s.optional(s.boolean()),
    input: s.optional(s.record(s.string(), s.unknown())),
    data: s.optional(s.record(s.string(), s.unknown())),
    timestamp: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
