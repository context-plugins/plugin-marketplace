import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateStorediScsiVolumeOutput = {
  /** The Amazon Resource Name (ARN) of the configured volume. */
  volumeArn?: string;
  /** The size of the volume in bytes. */
  volumeSizeInBytes?: number;
  /**
   * The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name that
   * initiators can use to connect to the target.
   */
  targetArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createStorediScsiVolumeOutputSchema: Schema<CreateStorediScsiVolumeOutput> =
  s.object<CreateStorediScsiVolumeOutput>(
    {
      volumeArn: s.optional(s.string()),
      volumeSizeInBytes: s.optional(s.int()),
      targetArn: s.optional(s.string()),
      _keysMap: {
        volumeArn: "VolumeARN",
        volumeSizeInBytes: "VolumeSizeInBytes",
        targetArn: "TargetARN",
      },
    },
    { additionalProperties: s.json() },
  );
