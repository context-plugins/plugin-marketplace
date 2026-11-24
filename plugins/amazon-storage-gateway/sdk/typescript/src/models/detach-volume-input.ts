import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DetachVolumeInput = {
  /** The Amazon Resource Name (ARN) of the volume to detach from the gateway. */
  volumeArn: string;
  /**
   * Set to true to forcibly remove the iSCSI connection of the target volume and detach the volume.
   * The default is false. If this value is set to false, you must manually disconnect the iSCSI
   * connection from the target volume. Valid Values: true | false
   */
  forceDetach?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detachVolumeInputSchema: Schema<DetachVolumeInput> = s.object<DetachVolumeInput>(
  {
    volumeArn: s.string(),
    forceDetach: s.optional(s.boolean()),
    _keysMap: {
      volumeArn: "VolumeARN",
      forceDetach: "ForceDetach",
    },
  },
  { additionalProperties: s.json() },
);
