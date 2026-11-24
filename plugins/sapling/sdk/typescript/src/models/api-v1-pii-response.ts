import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { usageSchema, type Usage } from "./usage.js";

export type ApiV1PiiResponse = {
  /**
   * Present only when the request sent return_usage: true. characters is the billable character
   * count the request submitted; see the return_usage request field for the exact semantics.
   */
  usage?: Usage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PiiResponseSchema: Schema<ApiV1PiiResponse> = s.object<ApiV1PiiResponse>(
  {
    usage: s.optional(s.lazy(() => usageSchema)),
  },
  { additionalProperties: s.json() },
);
