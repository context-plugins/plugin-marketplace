import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Network configuration for the APIM service extension. */
export type GoogleCloudApigeeV1ApimServiceExtensionNetworkConfig = {
  /**
   * Required. The subnet for the PSC NEG. Format:
   * projects/{project}/regions/{region}/subnetworks/{subnet}
   */
  subnet?: string;
  /** Required. The region for the PSC NEG. */
  region?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ApimServiceExtensionNetworkConfigSchema: Schema<GoogleCloudApigeeV1ApimServiceExtensionNetworkConfig> =
  s.object<GoogleCloudApigeeV1ApimServiceExtensionNetworkConfig>(
    {
      subnet: s.optional(s.string()),
      region: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
