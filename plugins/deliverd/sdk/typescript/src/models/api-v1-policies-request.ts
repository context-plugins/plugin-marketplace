import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sourceDeliverdDevPoliciesApiInternalSchema,
  sourceDeliverdDevPoliciesApiSchema,
  type SourceDeliverdDevPoliciesApi,
} from "./source-deliverd-dev-policies-api.js";

export type ApiV1PoliciesRequest = {
  /** What this policy is about, as an administrator will read it in a list */
  name: string;
  /** What it is for, for whoever reads it next year */
  description?: string;
  /** Rules to store as version 1. Omit to create the policy empty */
  rules?: Record<string, unknown>[];
  /** Put that first version in force immediately. Ignored without `rules` */
  activate?: boolean;
  /** Why this version exists, for the audit trail */
  note?: string;
  /** The repository these rules are kept in. Marks the version as managed in Git */
  source?: SourceDeliverdDevPoliciesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1PoliciesRequestProperties: s.Shape<ApiV1PoliciesRequest> = {
  name: s.string(),
  description: s.optional(s.string()),
  rules: s.optional(s.array(s.record(s.string(), s.unknown()))),
  activate: s.optional(s.boolean()),
  note: s.optional(s.string()),
  source: s.optional(s.lazy(() => sourceDeliverdDevPoliciesApiInternalSchema)),
};

export const apiV1PoliciesRequestInternalSchema: Schema<ApiV1PoliciesRequest> =
  s.object<ApiV1PoliciesRequest>(apiV1PoliciesRequestProperties, { additionalProperties: s.json() });

export const apiV1PoliciesRequestSchema: Schema<ApiV1PoliciesRequest> = s.lazySchema(() =>
  s.object<ApiV1PoliciesRequest>(
    {
      ...apiV1PoliciesRequestProperties,
      name: s.string().check(s.minLength(1), s.maxLength(120)),
      description: s.optional(s.string().check(s.maxLength(1000))),
      note: s.optional(s.string().check(s.maxLength(1000))),
      source: s.optional(s.lazy(() => sourceDeliverdDevPoliciesApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
