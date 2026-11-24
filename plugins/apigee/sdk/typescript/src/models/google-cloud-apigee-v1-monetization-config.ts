import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Configuration for the Monetization add-on. */
export type GoogleCloudApigeeV1MonetizationConfig = {
  /** Flag that specifies whether the Monetization add-on is enabled. */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1MonetizationConfigSchema: Schema<GoogleCloudApigeeV1MonetizationConfig> =
  s.object<GoogleCloudApigeeV1MonetizationConfig>(
    {
      enabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
