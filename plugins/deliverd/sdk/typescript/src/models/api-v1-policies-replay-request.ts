import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { failOnSchema, type FailOn } from "./fail-on.js";

export type ApiV1PoliciesReplayRequest = {
  /** With `version`: try a stored version, usually a draft */
  policyId?: string;
  /** The stored version's number */
  version?: number;
  /** With `rules`: try a policy file that has not been pushed */
  name?: string;
  /** The file's complete rule set */
  rules?: Record<string, unknown>[];
  /** How far back to replay. Default 30 */
  days?: number;
  /** How many changed decisions to list. Default 25 */
  examples?: number;
  /** What counts as failing, for CI: rejected_allowed (default), loosened, changed or never */
  failOn?: FailOn;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1PoliciesReplayRequestProperties: s.Shape<ApiV1PoliciesReplayRequest> = {
  policyId: s.optional(s.string()),
  version: s.optional(s.int()),
  name: s.optional(s.string()),
  rules: s.optional(s.array(s.record(s.string(), s.unknown()))),
  days: s.optional(s.int()),
  examples: s.optional(s.int()),
  failOn: s.optional(s.lazy(() => failOnSchema)),
};

export const apiV1PoliciesReplayRequestInternalSchema: Schema<ApiV1PoliciesReplayRequest> =
  s.object<ApiV1PoliciesReplayRequest>(apiV1PoliciesReplayRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1PoliciesReplayRequestSchema: Schema<ApiV1PoliciesReplayRequest> = s.lazySchema(() =>
  s.object<ApiV1PoliciesReplayRequest>(
    {
      ...apiV1PoliciesReplayRequestProperties,
      version: s.optional(s.int().check(s.gte(1))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(120))),
      days: s.optional(s.int().check(s.gte(1), s.lte(90))),
      examples: s.optional(s.int().check(s.gte(0), s.lte(100))),
    },
    { additionalProperties: s.json() },
  ),
);
