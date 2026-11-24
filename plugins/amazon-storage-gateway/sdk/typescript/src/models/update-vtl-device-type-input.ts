import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateVtlDeviceTypeInput = {
  /** The Amazon Resource Name (ARN) of the medium changer you want to select. */
  vtlDeviceArn: string;
  /**
   * The type of medium changer you want to select. Valid Values: STK-L700 | AWS-Gateway-VTL |
   * IBM-03584L32-0402
   */
  deviceType: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateVtlDeviceTypeInputSchema: Schema<UpdateVtlDeviceTypeInput> =
  s.object<UpdateVtlDeviceTypeInput>(
    {
      vtlDeviceArn: s.string(),
      deviceType: s.string(),
      _keysMap: {
        vtlDeviceArn: "VTLDeviceARN",
        deviceType: "DeviceType",
      },
    },
    { additionalProperties: s.json() },
  );
