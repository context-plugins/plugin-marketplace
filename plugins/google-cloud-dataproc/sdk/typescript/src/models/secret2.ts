import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. A Kerberos keytab file that can be used to authenticate a service principal with a
 * Kerberos Key Distribution Center (KDC).
 */
export type Secret2 = {
  /**
   * Optional. The relative resource name of a Secret Manager secret version, in the following
   * form:projects/{project_number}/secrets/{secret_id}/versions/{version_id}.
   */
  cloudSecret?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const secret2Schema: Schema<Secret2> = s.object<Secret2>(
  {
    cloudSecret: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
