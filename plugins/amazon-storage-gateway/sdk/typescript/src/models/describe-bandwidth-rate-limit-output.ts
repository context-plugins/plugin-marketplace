import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeBandwidthRateLimitOutput = {
  gatewayArn?: string;
  /**
   * The average upload bandwidth rate limit in bits per second. This field does not appear in the
   * response if the upload rate limit is not set.
   */
  averageUploadRateLimitInBitsPerSec?: number;
  /**
   * The average download bandwidth rate limit in bits per second. This field does not appear in the
   * response if the download rate limit is not set.
   */
  averageDownloadRateLimitInBitsPerSec?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeBandwidthRateLimitOutputSchema: Schema<DescribeBandwidthRateLimitOutput> =
  s.object<DescribeBandwidthRateLimitOutput>(
    {
      gatewayArn: s.optional(s.string()),
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
