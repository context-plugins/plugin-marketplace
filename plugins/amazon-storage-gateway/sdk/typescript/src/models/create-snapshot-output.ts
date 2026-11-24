import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateSnapshotOutput = {
  /** The Amazon Resource Name (ARN) of the volume of which the snapshot was taken. */
  volumeArn?: string;
  /**
   * The snapshot ID that is used to refer to the snapshot in future operations such as describing
   * snapshots (Amazon Elastic Compute Cloud API DescribeSnapshots) or creating a volume from a
   * snapshot (CreateStorediSCSIVolume).
   */
  snapshotId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createSnapshotOutputSchema: Schema<CreateSnapshotOutput> = s.object<CreateSnapshotOutput>(
  {
    volumeArn: s.optional(s.string()),
    snapshotId: s.optional(s.string()),
    _keysMap: {
      volumeArn: "VolumeARN",
      snapshotId: "SnapshotId",
    },
  },
  { additionalProperties: s.json() },
);
