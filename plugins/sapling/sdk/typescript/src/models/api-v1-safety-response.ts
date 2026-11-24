import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { usageSchema, type Usage } from "./usage.js";

export type ApiV1SafetyResponse = {
  /**
   * Present only for a batch (`texts`) request: one entry per input text, in input order, each
   * shaped exactly like the single-text response.
   */
  results?: Record<string, unknown>[];
  /**
   * Present only when the request sent return_usage: true. characters is the billable character
   * count the request submitted; see the return_usage request field for the exact semantics.
   */
  usage?: Usage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SafetyResponseSchema: Schema<ApiV1SafetyResponse> = s.object<ApiV1SafetyResponse>(
  {
    results: s.optional(s.array(s.record(s.string(), s.unknown()))),
    usage: s.optional(s.lazy(() => usageSchema)),
  },
  { additionalProperties: s.json() },
);
