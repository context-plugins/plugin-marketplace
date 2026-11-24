import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateVtlDeviceTypeOutput = {
  /** The Amazon Resource Name (ARN) of the medium changer you have selected. */
  vtlDeviceArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateVtlDeviceTypeOutputSchema: Schema<UpdateVtlDeviceTypeOutput> =
  s.object<UpdateVtlDeviceTypeOutput>(
    {
      vtlDeviceArn: s.optional(s.string()),
      _keysMap: {
        vtlDeviceArn: "VTLDeviceARN",
      },
    },
    { additionalProperties: s.json() },
  );
