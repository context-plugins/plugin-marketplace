import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resultSchema, type Result } from "./result.js";

export type ApiV1PoliciesTestResponse = {
  policyName: string;
  passed: number;
  failed: number;
  results: Result[];
  notes: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PoliciesTestResponseSchema: Schema<ApiV1PoliciesTestResponse> =
  s.object<ApiV1PoliciesTestResponse>(
    {
      policyName: s.string(),
      passed: s.int(),
      failed: s.int(),
      results: s.array(s.lazy(() => resultSchema)),
      notes: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
