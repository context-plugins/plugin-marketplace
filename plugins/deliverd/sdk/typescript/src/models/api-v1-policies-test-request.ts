import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1PoliciesTestRequest = {
  /** With `version`: try a stored version, usually a draft */
  policyId?: string;
  /** The stored version's number */
  version?: number;
  /** With `rules`: try a policy file that has not been pushed */
  name?: string;
  /** The file's complete rule set */
  rules?: Record<string, unknown>[];
  /**
   * Test cases: `name`, `action`, `input`, optional `agentId`, `environment`, `risk`, and `expect:
   * { effect, rule? }`
   */
  tests: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1PoliciesTestRequestProperties: s.Shape<ApiV1PoliciesTestRequest> = {
  policyId: s.optional(s.string()),
  version: s.optional(s.int()),
  name: s.optional(s.string()),
  rules: s.optional(s.array(s.record(s.string(), s.unknown()))),
  tests: s.array(s.record(s.string(), s.unknown())),
};

export const apiV1PoliciesTestRequestInternalSchema: Schema<ApiV1PoliciesTestRequest> =
  s.object<ApiV1PoliciesTestRequest>(apiV1PoliciesTestRequestProperties, { additionalProperties: s.json() });

export const apiV1PoliciesTestRequestSchema: Schema<ApiV1PoliciesTestRequest> = s.lazySchema(() =>
  s.object<ApiV1PoliciesTestRequest>(
    {
      ...apiV1PoliciesTestRequestProperties,
      version: s.optional(s.int().check(s.gte(1))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(120))),
      tests: s.array(s.record(s.string(), s.unknown())).check(s.maxLength(200)),
    },
    { additionalProperties: s.json() },
  ),
);
