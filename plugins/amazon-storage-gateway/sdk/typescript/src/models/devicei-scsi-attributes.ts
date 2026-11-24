import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeviceiScsiAttributes = {
  /**
   * Specifies the unique Amazon Resource Name (ARN) that encodes the iSCSI qualified name(iqn) of a
   * tape drive or media changer target.
   */
  targetArn?: string;
  /** The network interface identifier of the VTL device. */
  networkInterfaceId?: string;
  /** The port used to communicate with iSCSI VTL device targets. */
  networkInterfacePort?: number;
  /** Indicates whether mutual CHAP is enabled for the iSCSI target. */
  chapEnabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deviceiScsiAttributesSchema: Schema<DeviceiScsiAttributes> = s.object<DeviceiScsiAttributes>(
  {
    targetArn: s.optional(s.string()),
    networkInterfaceId: s.optional(s.string()),
    networkInterfacePort: s.optional(s.int()),
    chapEnabled: s.optional(s.boolean()),
    _keysMap: {
      targetArn: "TargetARN",
      networkInterfaceId: "NetworkInterfaceId",
      networkInterfacePort: "NetworkInterfacePort",
      chapEnabled: "ChapEnabled",
    },
  },
  { additionalProperties: s.json() },
);
