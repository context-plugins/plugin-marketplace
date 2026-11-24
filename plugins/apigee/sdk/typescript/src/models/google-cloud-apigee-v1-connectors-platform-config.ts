import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Configuration for the Connectors Platform add-on. */
export type GoogleCloudApigeeV1ConnectorsPlatformConfig = {
  /** Flag that specifies whether the Connectors Platform add-on is enabled. */
  enabled?: boolean;
  /**
   * Output only. Time at which the Connectors Platform add-on expires in milliseconds since epoch.
   * If unspecified, the add-on will never expire.
   */
  expiresAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ConnectorsPlatformConfigSchema: Schema<GoogleCloudApigeeV1ConnectorsPlatformConfig> =
  s.object<GoogleCloudApigeeV1ConnectorsPlatformConfig>(
    {
      enabled: s.optional(s.boolean()),
      expiresAt: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
