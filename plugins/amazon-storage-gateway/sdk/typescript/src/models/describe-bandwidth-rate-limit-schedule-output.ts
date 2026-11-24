import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  bandwidthRateLimitIntervalSchema,
  type BandwidthRateLimitInterval,
} from "./bandwidth-rate-limit-interval.js";

export type DescribeBandwidthRateLimitScheduleOutput = {
  gatewayArn?: string;
  /** An array that contains the bandwidth rate limit intervals for a tape or volume gateway. */
  bandwidthRateLimitIntervals?: BandwidthRateLimitInterval[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeBandwidthRateLimitScheduleOutputSchema: Schema<DescribeBandwidthRateLimitScheduleOutput> =
  s.object<DescribeBandwidthRateLimitScheduleOutput>(
    {
      gatewayArn: s.optional(s.string()),
      bandwidthRateLimitIntervals: s.optional(s.array(s.lazy(() => bandwidthRateLimitIntervalSchema))),
      _keysMap: {
        gatewayArn: "GatewayARN",
        bandwidthRateLimitIntervals: "BandwidthRateLimitIntervals",
      },
    },
    { additionalProperties: s.json() },
  );
