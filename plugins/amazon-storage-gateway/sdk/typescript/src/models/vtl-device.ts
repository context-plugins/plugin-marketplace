import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { deviceiScsiAttributesSchema, type DeviceiScsiAttributes } from "./devicei-scsi-attributes.js";

export type VtlDevice = {
  /**
   * Specifies the unique Amazon Resource Name (ARN) of the device (tape drive or media changer).
   */
  vtlDeviceArn?: string;
  /** Specifies the type of device that the VTL device emulates. */
  vtlDeviceType?: string;
  /** Specifies the vendor of the device that the VTL device object emulates. */
  vtlDeviceVendor?: string;
  /** Specifies the model number of device that the VTL device emulates. */
  vtlDeviceProductIdentifier?: string;
  deviceiScsiAttributes?: DeviceiScsiAttributes;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vtlDeviceSchema: Schema<VtlDevice> = s.object<VtlDevice>(
  {
    vtlDeviceArn: s.optional(s.string()),
    vtlDeviceType: s.optional(s.string()),
    vtlDeviceVendor: s.optional(s.string()),
    vtlDeviceProductIdentifier: s.optional(s.string()),
    deviceiScsiAttributes: s.optional(s.lazy(() => deviceiScsiAttributesSchema)),
    _keysMap: {
      vtlDeviceArn: "VTLDeviceARN",
      vtlDeviceType: "VTLDeviceType",
      vtlDeviceVendor: "VTLDeviceVendor",
      vtlDeviceProductIdentifier: "VTLDeviceProductIdentifier",
      deviceiScsiAttributes: "DeviceiSCSIAttributes",
    },
  },
  { additionalProperties: s.json() },
);
