import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Runtime configuration for Analytics add-on. */
export type GoogleCloudApigeeV1RuntimeAnalyticsConfig2 = {
  /** If Runtime should send billing data to AX or not. */
  billingPipelineEnabled?: boolean;
  /** If the Analytics is enabled or not. */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1RuntimeAnalyticsConfig2Schema: Schema<GoogleCloudApigeeV1RuntimeAnalyticsConfig2> =
  s.object<GoogleCloudApigeeV1RuntimeAnalyticsConfig2>(
    {
      billingPipelineEnabled: s.optional(s.boolean()),
      enabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
