import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Configuration for the Advanced API Ops add-on. */
export type GoogleCloudApigeeV1AdvancedApiOpsConfig = {
  /** Flag that specifies whether the Advanced API Ops add-on is enabled. */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AdvancedApiOpsConfigSchema: Schema<GoogleCloudApigeeV1AdvancedApiOpsConfig> =
  s.object<GoogleCloudApigeeV1AdvancedApiOpsConfig>(
    {
      enabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
