import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeBandwidthRateLimitScheduleInput = {
  gatewayArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeBandwidthRateLimitScheduleInputSchema: Schema<DescribeBandwidthRateLimitScheduleInput> =
  s.object<DescribeBandwidthRateLimitScheduleInput>(
    {
      gatewayArn: s.string(),
      _keysMap: {
        gatewayArn: "GatewayARN",
      },
    },
    { additionalProperties: s.json() },
  );
