import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. Identity related configuration, including service account based secure multi-tenancy
 * user mappings.
 */
export type IdentityConfig2 = {
  /** Required. Map of user to service account. */
  userServiceAccountMapping?: Record<string, string>;
  /**
   * Optional. Whether to enable SSH access for the cluster. The default is true for image versions
   * prior to 3.1 and false for image versions 3.1 and later. The default behavior can be changed
   * when creating clusters using image versions 2.3.30 and later.
   */
  enableSsh?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const identityConfig2Schema: Schema<IdentityConfig2> = s.object<IdentityConfig2>(
  {
    userServiceAccountMapping: s.optional(s.record(s.string(), s.string())),
    enableSsh: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
