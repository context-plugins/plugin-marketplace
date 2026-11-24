import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A Reference configuration. References must refer to a keystore that also exists in the parent
 * environment.
 */
export type GoogleCloudApigeeV1Reference = {
  /**
   * Required. The resource id of this reference. Values must match the regular expression
   * [\w\s\-.]+.
   */
  name?: string;
  /** Optional. A human-readable description of this reference. */
  description?: string;
  /**
   * The type of resource referred to by this reference. Valid values are 'KeyStore' or
   * 'TrustStore'.
   */
  resourceType?: string;
  /**
   * Required. The id of the resource to which this reference refers. Must be the id of a resource
   * that exists in the parent environment and is of the given resource_type.
   */
  refers?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ReferenceSchema: Schema<GoogleCloudApigeeV1Reference> =
  s.object<GoogleCloudApigeeV1Reference>(
    {
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      resourceType: s.optional(s.string()),
      refers: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
