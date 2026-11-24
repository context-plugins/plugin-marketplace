import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateSnapshotFromVolumeRecoveryPointOutput = {
  /** The ID of the snapshot. */
  snapshotId?: string;
  /**
   * The Amazon Resource Name (ARN) of the iSCSI volume target. Use the DescribeStorediSCSIVolumes
   * operation to return to retrieve the TargetARN for specified VolumeARN.
   */
  volumeArn?: string;
  /** The time the volume was created from the recovery point. */
  volumeRecoveryPointTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createSnapshotFromVolumeRecoveryPointOutputSchema: Schema<CreateSnapshotFromVolumeRecoveryPointOutput> =
  s.object<CreateSnapshotFromVolumeRecoveryPointOutput>(
    {
      snapshotId: s.optional(s.string()),
      volumeArn: s.optional(s.string()),
      volumeRecoveryPointTime: s.optional(s.string()),
      _keysMap: {
        snapshotId: "SnapshotId",
        volumeArn: "VolumeARN",
        volumeRecoveryPointTime: "VolumeRecoveryPointTime",
      },
    },
    { additionalProperties: s.json() },
  );
