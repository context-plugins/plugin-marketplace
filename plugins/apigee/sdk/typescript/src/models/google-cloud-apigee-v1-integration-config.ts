import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Configuration for the Integration add-on. */
export type GoogleCloudApigeeV1IntegrationConfig = {
  /** Flag that specifies whether the Integration add-on is enabled. */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1IntegrationConfigSchema: Schema<GoogleCloudApigeeV1IntegrationConfig> =
  s.object<GoogleCloudApigeeV1IntegrationConfig>(
    {
      enabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
