import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { policySchema, type Policy } from "./policy.js";

export type ApiV1PoliciesResponse1 = {
  policies: Policy[];
  /** Pass back as ?cursor= for the next page. Null means this is the end. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PoliciesResponse1Schema: Schema<ApiV1PoliciesResponse1> = s.object<ApiV1PoliciesResponse1>(
  {
    policies: s.array(s.lazy(() => policySchema)),
    nextCursor: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
