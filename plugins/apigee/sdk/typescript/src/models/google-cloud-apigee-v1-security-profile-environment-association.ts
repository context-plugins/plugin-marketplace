import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Represents a SecurityProfileEnvironmentAssociation resource. */
export type GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation = {
  /**
   * Immutable. The environment ID that the profile is attached to, e.g. `prod`. This is the bare
   * environment ID, not a full resource name; see b/288477507.
   */
  name?: string;
  /** Output only. The time when environment was attached to the security profile. */
  attachTime?: string;
  /**
   * DEPRECATED: DO NOT USE Revision ID of the security profile.
   *
   * @deprecated
   */
  securityProfileRevisionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityProfileEnvironmentAssociationSchema: Schema<GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation> =
  s.object<GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation>(
    {
      name: s.optional(s.string()),
      attachTime: s.optional(s.string()),
      securityProfileRevisionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
