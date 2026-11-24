import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GoogleCloudApigeeV1KeyAliasReference = {
  /**
   * Reference name in the following format:
   * `organizations/{org}/environments/{env}/references/{reference}`
   */
  reference?: string;
  /** Alias ID. Must exist in the keystore referred to by the reference. */
  aliasId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1KeyAliasReferenceSchema: Schema<GoogleCloudApigeeV1KeyAliasReference> =
  s.object<GoogleCloudApigeeV1KeyAliasReference>(
    {
      reference: s.optional(s.string()),
      aliasId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
