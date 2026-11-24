import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Runtime configuration for the Analytics add-on. */
export type GoogleCloudApigeeV1RuntimeAnalyticsConfig = {
  /** If Runtime should send billing data to AX or not. */
  billingPipelineEnabled?: boolean;
  /** If the Analytics is enabled or not. */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1RuntimeAnalyticsConfigSchema: Schema<GoogleCloudApigeeV1RuntimeAnalyticsConfig> =
  s.object<GoogleCloudApigeeV1RuntimeAnalyticsConfig>(
    {
      billingPipelineEnabled: s.optional(s.boolean()),
      enabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
