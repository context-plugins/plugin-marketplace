import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type VolumeiScsiAttributes = {
  /** The Amazon Resource Name (ARN) of the volume target. */
  targetArn?: string;
  /** The network interface identifier. */
  networkInterfaceId?: string;
  /** The port used to communicate with iSCSI targets. */
  networkInterfacePort?: number;
  /** The logical disk number. */
  lunNumber?: number;
  /** Indicates whether mutual CHAP is enabled for the iSCSI target. */
  chapEnabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const volumeiScsiAttributesSchema: Schema<VolumeiScsiAttributes> = s.object<VolumeiScsiAttributes>(
  {
    targetArn: s.optional(s.string()),
    networkInterfaceId: s.optional(s.string()),
    networkInterfacePort: s.optional(s.int()),
    lunNumber: s.optional(s.int()),
    chapEnabled: s.optional(s.boolean()),
    _keysMap: {
      targetArn: "TargetARN",
      networkInterfaceId: "NetworkInterfaceId",
      networkInterfacePort: "NetworkInterfacePort",
      lunNumber: "LunNumber",
      chapEnabled: "ChapEnabled",
    },
  },
  { additionalProperties: s.json() },
);
