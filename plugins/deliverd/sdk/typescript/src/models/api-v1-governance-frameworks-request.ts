import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { requirementInternalSchema, requirementSchema, type Requirement } from "./requirement.js";

export type ApiV1GovernanceFrameworksRequest = {
  /** custom_ followed by lower case letters, digits and underscores */
  key: string;
  /** e.g. 1.0 or 2026.10. A change to a published framework is a new version */
  version: string;
  name: string;
  summary?: string;
  /** Where it applies, e.g. EU, UK. Empty: wherever it is adopted */
  jurisdictions?: string[];
  effectiveFrom?: string;
  requirements: Requirement[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1GovernanceFrameworksRequestProperties: s.Shape<ApiV1GovernanceFrameworksRequest> = {
  key: s.string(),
  version: s.string(),
  name: s.string(),
  summary: s.optional(s.string()),
  jurisdictions: s.optional(s.array(s.string())),
  effectiveFrom: s.optional(s.dateOnly()),
  requirements: s.array(s.lazy(() => requirementInternalSchema)),
};

export const apiV1GovernanceFrameworksRequestInternalSchema: Schema<ApiV1GovernanceFrameworksRequest> =
  s.object<ApiV1GovernanceFrameworksRequest>(apiV1GovernanceFrameworksRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1GovernanceFrameworksRequestSchema: Schema<ApiV1GovernanceFrameworksRequest> = s.lazySchema(
  () =>
    s.object<ApiV1GovernanceFrameworksRequest>(
      {
        ...apiV1GovernanceFrameworksRequestProperties,
        key: s.string().check(s.pattern("^custom_[a-z0-9_]{1,52}$")),
        version: s.string().check(s.pattern("^[0-9A-Za-z][0-9A-Za-z._-]{0,31}$")),
        name: s.string().check(s.minLength(1), s.maxLength(200)),
        summary: s.optional(s.string().check(s.maxLength(2000))),
        jurisdictions: s.optional(
          s.array(s.string().check(s.minLength(1), s.maxLength(60))).check(s.maxLength(30)),
        ),
        requirements: s.array(s.lazy(() => requirementSchema)).check(s.minLength(1), s.maxLength(200)),
      },
      { additionalProperties: s.json() },
    ),
);
