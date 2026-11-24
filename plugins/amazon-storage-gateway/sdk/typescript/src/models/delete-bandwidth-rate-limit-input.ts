import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteBandwidthRateLimitInput = {
  gatewayArn: string;
  /**
   * One of the BandwidthType values that indicates the gateway bandwidth rate limit to delete.
   * Valid Values: UPLOAD | DOWNLOAD | ALL
   */
  bandwidthType: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteBandwidthRateLimitInputSchema: Schema<DeleteBandwidthRateLimitInput> =
  s.object<DeleteBandwidthRateLimitInput>(
    {
      gatewayArn: s.string(),
      bandwidthType: s.string(),
      _keysMap: {
        gatewayArn: "GatewayARN",
        bandwidthType: "BandwidthType",
      },
    },
    { additionalProperties: s.json() },
  );
