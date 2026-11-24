import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The repository these rules are kept in. Marks the version as managed in Git */
export type SourceDeliverdDevPoliciesApi = {
  /** owner/name, or the repository's URL */
  repository: string;
  /** The commit the file was read at */
  commit?: string;
  /** The policy file's path in the repository */
  path?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const sourceDeliverdDevPoliciesApiProperties: s.Shape<SourceDeliverdDevPoliciesApi> = {
  repository: s.string(),
  commit: s.optional(s.string()),
  path: s.optional(s.string()),
};

export const sourceDeliverdDevPoliciesApiInternalSchema: Schema<SourceDeliverdDevPoliciesApi> =
  s.object<SourceDeliverdDevPoliciesApi>(sourceDeliverdDevPoliciesApiProperties, {
    additionalProperties: s.json(),
  });

export const sourceDeliverdDevPoliciesApiSchema: Schema<SourceDeliverdDevPoliciesApi> = s.lazySchema(() =>
  s.object<SourceDeliverdDevPoliciesApi>(
    {
      ...sourceDeliverdDevPoliciesApiProperties,
      repository: s.string().check(s.minLength(1), s.maxLength(200)),
      commit: s.optional(s.string().check(s.maxLength(64))),
      path: s.optional(s.string().check(s.maxLength(240))),
    },
    { additionalProperties: s.json() },
  ),
);
