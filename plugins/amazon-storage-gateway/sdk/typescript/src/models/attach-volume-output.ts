import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AttachVolumeOutput = {
  /** The Amazon Resource Name (ARN) of the volume that was attached to the gateway. */
  volumeArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name for the
   * initiator that was used to connect to the target.
   */
  targetArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attachVolumeOutputSchema: Schema<AttachVolumeOutput> = s.object<AttachVolumeOutput>(
  {
    volumeArn: s.optional(s.string()),
    targetArn: s.optional(s.string()),
    _keysMap: {
      volumeArn: "VolumeARN",
      targetArn: "TargetARN",
    },
  },
  { additionalProperties: s.json() },
);
