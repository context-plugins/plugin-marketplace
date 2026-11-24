import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { vtlDeviceSchema, type VtlDevice } from "./vtl-device.js";

export type DescribeVtlDevicesOutput = {
  gatewayArn?: string;
  /**
   * An array of VTL device objects composed of the Amazon Resource Name (ARN) of the VTL devices.
   */
  vtlDevices?: VtlDevice[];
  /**
   * An opaque string that indicates the position at which the VTL devices that were fetched for
   * description ended. Use the marker in your next request to fetch the next set of VTL devices in
   * the list. If there are no more VTL devices to describe, this field does not appear in the
   * response.
   */
  marker?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeVtlDevicesOutputSchema: Schema<DescribeVtlDevicesOutput> =
  s.object<DescribeVtlDevicesOutput>(
    {
      gatewayArn: s.optional(s.string()),
      vtlDevices: s.optional(s.array(s.lazy(() => vtlDeviceSchema))),
      marker: s.optional(s.string()),
      _keysMap: {
        gatewayArn: "GatewayARN",
        vtlDevices: "VTLDevices",
        marker: "Marker",
      },
    },
    { additionalProperties: s.json() },
  );
