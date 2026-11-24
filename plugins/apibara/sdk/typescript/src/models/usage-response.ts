import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** API usage and plan limit response. */
export type UsageResponse = {
  /** Usage information returned for the authenticated API key. */
  data: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageResponseSchema: Schema<UsageResponse> = s.object<UsageResponse>(
  {
    data: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
