import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Collection of key/value string pairs. */
export type GoogleCloudApigeeV1KeyValueMap = {
  /**
   * Required. Flag that specifies whether entry values will be encrypted. This field is retained
   * for backward compatibility and the value of encrypted will always be `true`. Apigee X and
   * hybrid do not support unencrypted key value maps.
   */
  encrypted?: boolean;
  /** Optional. Flag that specifies whether entry values will be masked when returned. */
  maskedValues?: boolean;
  /** Required. ID of the key value map. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1KeyValueMapSchema: Schema<GoogleCloudApigeeV1KeyValueMap> =
  s.object<GoogleCloudApigeeV1KeyValueMap>(
    {
      encrypted: s.optional(s.boolean()),
      maskedValues: s.optional(s.boolean()),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
