import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type6Schema, type Type6 } from "./type6.js";

export type GoogleCloudApigeeV1AliasRevisionConfig = {
  type?: Type6;
  /**
   * Name of the alias revision included in the keystore in the following format:
   * `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}/revisions/{rev}`
   */
  name?: string;
  /** Location of the alias file. For example, a Google Cloud Storage URI. */
  location?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AliasRevisionConfigSchema: Schema<GoogleCloudApigeeV1AliasRevisionConfig> =
  s.object<GoogleCloudApigeeV1AliasRevisionConfig>(
    {
      type: s.optional(s.lazy(() => type6Schema)),
      name: s.optional(s.string()),
      location: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
