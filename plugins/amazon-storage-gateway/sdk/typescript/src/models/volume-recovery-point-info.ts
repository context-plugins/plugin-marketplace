import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type VolumeRecoveryPointInfo = {
  /** The Amazon Resource Name (ARN) of the volume target. */
  volumeArn?: string;
  /** The size of the volume in bytes. */
  volumeSizeInBytes?: number;
  /**
   * The size of the data stored on the volume in bytes. This value is not available for volumes
   * created prior to May 13, 2015, until you store data on the volume.
   */
  volumeUsageInBytes?: number;
  /** The time the recovery point was taken. */
  volumeRecoveryPointTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const volumeRecoveryPointInfoSchema: Schema<VolumeRecoveryPointInfo> =
  s.object<VolumeRecoveryPointInfo>(
    {
      volumeArn: s.optional(s.string()),
      volumeSizeInBytes: s.optional(s.int()),
      volumeUsageInBytes: s.optional(s.int()),
      volumeRecoveryPointTime: s.optional(s.string()),
      _keysMap: {
        volumeArn: "VolumeARN",
        volumeSizeInBytes: "VolumeSizeInBytes",
        volumeUsageInBytes: "VolumeUsageInBytes",
        volumeRecoveryPointTime: "VolumeRecoveryPointTime",
      },
    },
    { additionalProperties: s.json() },
  );
