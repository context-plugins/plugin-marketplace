import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeAvailabilityMonitorTestInput = {
  gatewayArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeAvailabilityMonitorTestInputSchema: Schema<DescribeAvailabilityMonitorTestInput> =
  s.object<DescribeAvailabilityMonitorTestInput>(
    {
      gatewayArn: s.string(),
      _keysMap: {
        gatewayArn: "GatewayARN",
      },
    },
    { additionalProperties: s.json() },
  );
