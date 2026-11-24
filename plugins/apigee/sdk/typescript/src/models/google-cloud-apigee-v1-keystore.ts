import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Datastore for Certificates and Aliases. */
export type GoogleCloudApigeeV1Keystore = {
  /**
   * Required. Resource ID for this keystore. Values must match the regular expression
   * `[\w[:space:].-]{1,255}`.
   */
  name?: string;
  /** Output only. Aliases in this keystore. */
  aliases?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1KeystoreSchema: Schema<GoogleCloudApigeeV1Keystore> =
  s.object<GoogleCloudApigeeV1Keystore>(
    {
      name: s.optional(s.string()),
      aliases: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
