import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Configuration for addons which act on all data in the API hub. This is used to specify if the
 * addon is enabled for all data in the API hub.
 */
export type GoogleCloudApihubV1AllDataAddonConfig = {
  /** Required. If true, the addon is enabled for all data in the API hub. */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1AllDataAddonConfigSchema: Schema<GoogleCloudApihubV1AllDataAddonConfig> =
  s.object<GoogleCloudApihubV1AllDataAddonConfig>(
    {
      enabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
