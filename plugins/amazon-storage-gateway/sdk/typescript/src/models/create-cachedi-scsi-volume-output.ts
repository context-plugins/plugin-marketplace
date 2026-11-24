import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateCachediScsiVolumeOutput = {
  /** The Amazon Resource Name (ARN) of the configured volume. */
  volumeArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name that
   * initiators can use to connect to the target.
   */
  targetArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createCachediScsiVolumeOutputSchema: Schema<CreateCachediScsiVolumeOutput> =
  s.object<CreateCachediScsiVolumeOutput>(
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
