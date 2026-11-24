import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AliasRevisionConfigSchema,
  type GoogleCloudApigeeV1AliasRevisionConfig,
} from "./google-cloud-apigee-v1-alias-revision-config.js";

export type GoogleCloudApigeeV1KeystoreConfig = {
  /** Aliases in the keystore. */
  aliases?: GoogleCloudApigeeV1AliasRevisionConfig[];
  /**
   * Resource name in the following format:
   * `organizations/{org}/environments/{env}/keystores/{keystore}`
   */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1KeystoreConfigSchema: Schema<GoogleCloudApigeeV1KeystoreConfig> =
  s.object<GoogleCloudApigeeV1KeystoreConfig>(
    {
      aliases: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AliasRevisionConfigSchema))),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
