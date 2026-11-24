import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeVtlDevicesInput = {
  gatewayArn: string;
  /**
   * An array of strings, where each string represents the Amazon Resource Name (ARN) of a VTL
   * device. All of the specified VTL devices must be from the same gateway. If no VTL devices are
   * specified, the result will contain all devices on the specified gateway.
   */
  vtlDeviceArNs?: string[];
  /** An opaque string that indicates the position at which to begin describing the VTL devices. */
  marker?: string;
  /** Specifies that the number of VTL devices described be limited to the specified number. */
  limit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeVtlDevicesInputSchema: Schema<DescribeVtlDevicesInput> =
  s.object<DescribeVtlDevicesInput>(
    {
      gatewayArn: s.string(),
      vtlDeviceArNs: s.optional(s.array(s.string())),
      marker: s.optional(s.string()),
      limit: s.optional(s.int()),
      _keysMap: {
        gatewayArn: "GatewayARN",
        vtlDeviceArNs: "VTLDeviceARNs",
        marker: "Marker",
        limit: "Limit",
      },
    },
    { additionalProperties: s.json() },
  );
