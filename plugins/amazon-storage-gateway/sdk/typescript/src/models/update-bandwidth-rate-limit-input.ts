import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateBandwidthRateLimitInput = {
  gatewayArn: string;
  /** The average upload bandwidth rate limit in bits per second. */
  averageUploadRateLimitInBitsPerSec?: number;
  /** The average download bandwidth rate limit in bits per second. */
  averageDownloadRateLimitInBitsPerSec?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateBandwidthRateLimitInputSchema: Schema<UpdateBandwidthRateLimitInput> =
  s.object<UpdateBandwidthRateLimitInput>(
    {
      gatewayArn: s.string(),
      averageUploadRateLimitInBitsPerSec: s.optional(s.int()),
      averageDownloadRateLimitInBitsPerSec: s.optional(s.int()),
      _keysMap: {
        gatewayArn: "GatewayARN",
        averageUploadRateLimitInBitsPerSec: "AverageUploadRateLimitInBitsPerSec",
        averageDownloadRateLimitInBitsPerSec: "AverageDownloadRateLimitInBitsPerSec",
      },
    },
    { additionalProperties: s.json() },
  );
