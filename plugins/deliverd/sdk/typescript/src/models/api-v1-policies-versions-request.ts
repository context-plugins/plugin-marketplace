import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sourceDeliverdDevPoliciesApiInternalSchema,
  sourceDeliverdDevPoliciesApiSchema,
  type SourceDeliverdDevPoliciesApi,
} from "./source-deliverd-dev-policies-api.js";

export type ApiV1PoliciesVersionsRequest = {
  /** The complete rule set for this version, not a patch */
  rules: Record<string, unknown>[];
  /** Why this version exists, for the audit trail */
  note?: string;
  /** Put it in force as well as storing it */
  activate?: boolean;
  /** The repository these rules are kept in. Marks the version as managed in Git */
  source?: SourceDeliverdDevPoliciesApi;
  /**
   * Store nothing when the version in force already has exactly these rules. For CI, which pushes
   * on every merge
   */
  skipUnchanged?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1PoliciesVersionsRequestProperties: s.Shape<ApiV1PoliciesVersionsRequest> = {
  rules: s.array(s.record(s.string(), s.unknown())),
  note: s.optional(s.string()),
  activate: s.optional(s.boolean()),
  source: s.optional(s.lazy(() => sourceDeliverdDevPoliciesApiInternalSchema)),
  skipUnchanged: s.optional(s.boolean()),
};

export const apiV1PoliciesVersionsRequestInternalSchema: Schema<ApiV1PoliciesVersionsRequest> =
  s.object<ApiV1PoliciesVersionsRequest>(apiV1PoliciesVersionsRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1PoliciesVersionsRequestSchema: Schema<ApiV1PoliciesVersionsRequest> = s.lazySchema(() =>
  s.object<ApiV1PoliciesVersionsRequest>(
    {
      ...apiV1PoliciesVersionsRequestProperties,
      note: s.optional(s.string().check(s.maxLength(1000))),
      source: s.optional(s.lazy(() => sourceDeliverdDevPoliciesApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
