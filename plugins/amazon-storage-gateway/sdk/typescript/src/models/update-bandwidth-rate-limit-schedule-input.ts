import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  bandwidthRateLimitIntervalSchema,
  type BandwidthRateLimitInterval,
} from "./bandwidth-rate-limit-interval.js";

export type UpdateBandwidthRateLimitScheduleInput = {
  gatewayArn: string;
  /**
   * An array containing bandwidth rate limit schedule intervals for a gateway. When no bandwidth
   * rate limit intervals have been scheduled, the array is empty.
   */
  bandwidthRateLimitIntervals: BandwidthRateLimitInterval[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateBandwidthRateLimitScheduleInputSchema: Schema<UpdateBandwidthRateLimitScheduleInput> =
  s.object<UpdateBandwidthRateLimitScheduleInput>(
    {
      gatewayArn: s.string(),
      bandwidthRateLimitIntervals: s.array(s.lazy(() => bandwidthRateLimitIntervalSchema)),
      _keysMap: {
        gatewayArn: "GatewayARN",
        bandwidthRateLimitIntervals: "BandwidthRateLimitIntervals",
      },
    },
    { additionalProperties: s.json() },
  );
