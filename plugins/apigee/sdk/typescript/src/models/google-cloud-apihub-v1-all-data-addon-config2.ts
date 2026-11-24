import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Configuration for addons which act on all data in the API hub. */
export type GoogleCloudApihubV1AllDataAddonConfig2 = {
  /** Required. If true, the addon is enabled for all data in the API hub. */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1AllDataAddonConfig2Schema: Schema<GoogleCloudApihubV1AllDataAddonConfig2> =
  s.object<GoogleCloudApihubV1AllDataAddonConfig2>(
    {
      enabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
