import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { degradedInternalSchema, degradedSchema, type Degraded } from "./degraded.js";
import { usageSchema, type Usage } from "./usage.js";

export type ApiV1SpellcheckResponse = {
  /**
   * Present only on a partial result: a model stage could not process some sentences in time, so
   * those sentences may be missing some or all of their corrections (a failed primary stage leaves
   * a sentence unchecked; a failed secondary stage, e.g. neural spellcheck or postprocessing, drops
   * only that stage's corrections). Every edit returned is still valid. Absent from a fully
   * successful response. Retry the request (after a short backoff) for a complete result.
   */
  degraded?: Degraded;
  /**
   * Present only when the request sent return_usage: true. characters is the billable character
   * count the request submitted; see the return_usage request field for the exact semantics.
   */
  usage?: Usage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1SpellcheckResponseProperties: s.Shape<ApiV1SpellcheckResponse> = {
  degraded: s.optional(s.lazy(() => degradedInternalSchema)),
  usage: s.optional(s.lazy(() => usageSchema)),
};

export const apiV1SpellcheckResponseInternalSchema: Schema<ApiV1SpellcheckResponse> =
  s.object<ApiV1SpellcheckResponse>(apiV1SpellcheckResponseProperties, { additionalProperties: s.json() });

export const apiV1SpellcheckResponseSchema: Schema<ApiV1SpellcheckResponse> = s.lazySchema(() =>
  s.object<ApiV1SpellcheckResponse>(
    {
      ...apiV1SpellcheckResponseProperties,
      degraded: s.optional(s.lazy(() => degradedSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
