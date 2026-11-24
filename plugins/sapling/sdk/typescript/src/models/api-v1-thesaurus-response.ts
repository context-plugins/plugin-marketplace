import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { usageSchema, type Usage } from "./usage.js";

export type ApiV1ThesaurusResponse = {
  /** [similarity, term] pairs. */
  neighbors?: Record<string, unknown>[][];
  synonyms?: string[];
  /**
   * Present only when the request sent return_usage: true. characters is the billable character
   * count the request submitted; see the return_usage request field for the exact semantics.
   */
  usage?: Usage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ThesaurusResponseSchema: Schema<ApiV1ThesaurusResponse> = s.object<ApiV1ThesaurusResponse>(
  {
    neighbors: s.optional(s.array(s.array(s.record(s.string(), s.unknown())))),
    synonyms: s.optional(s.array(s.string())),
    usage: s.optional(s.lazy(() => usageSchema)),
  },
  { additionalProperties: s.json() },
);
