import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateBandwidthRateLimitScheduleOutput = {
  gatewayArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateBandwidthRateLimitScheduleOutputSchema: Schema<UpdateBandwidthRateLimitScheduleOutput> =
  s.object<UpdateBandwidthRateLimitScheduleOutput>(
    {
      gatewayArn: s.optional(s.string()),
      _keysMap: {
        gatewayArn: "GatewayARN",
      },
    },
    { additionalProperties: s.json() },
  );
