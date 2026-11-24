import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GoogleCloudApigeeV1ReferenceConfig = {
  /**
   * Name of the referenced resource in the following format:
   * `organizations/{org}/environments/{env}/keystores/{keystore}` Only references to keystore
   * resources are supported.
   */
  resourceName?: string;
  /**
   * Name of the reference in the following format:
   * `organizations/{org}/environments/{env}/references/{reference}`
   */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ReferenceConfigSchema: Schema<GoogleCloudApigeeV1ReferenceConfig> =
  s.object<GoogleCloudApigeeV1ReferenceConfig>(
    {
      resourceName: s.optional(s.string()),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
