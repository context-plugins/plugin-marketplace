import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response for GetApiSecurityRuntimeConfig[EnvironmentService.GetApiSecurityRuntimeConfig]. */
export type GoogleCloudApigeeV1ApiSecurityRuntimeConfig = {
  /** Time that the API Security Runtime configuration was updated. */
  updateTime?: string;
  /**
   * Unique ID for the API Security Runtime configuration. The ID will only change if the
   * environment is deleted and recreated.
   */
  uid?: string;
  /** A list of up to 5 Cloud Storage Blobs that contain SecurityActions. */
  location?: string[];
  /**
   * Revision ID of the API Security Runtime configuration. The higher the value, the more recently
   * the configuration was deployed.
   */
  revisionId?: string;
  /**
   * Name of the environment API Security Runtime configuration resource. Format:
   * `organizations/{org}/environments/{env}/apiSecurityRuntimeConfig`
   */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ApiSecurityRuntimeConfigSchema: Schema<GoogleCloudApigeeV1ApiSecurityRuntimeConfig> =
  s.object<GoogleCloudApigeeV1ApiSecurityRuntimeConfig>(
    {
      updateTime: s.optional(s.string()),
      uid: s.optional(s.string()),
      location: s.optional(s.array(s.string())),
      revisionId: s.optional(s.string()),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
