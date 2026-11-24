import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { volumeiScsiAttributesSchema, type VolumeiScsiAttributes } from "./volumei-scsi-attributes.js";

export type StorediScsiVolume = {
  /** The Amazon Resource Name (ARN) of the storage volume. */
  volumeArn?: string;
  /** The unique identifier of the volume, e.g., vol-AE4B946D. */
  volumeId?: string;
  /** One of the VolumeType enumeration values describing the type of the volume. */
  volumeType?: string;
  /** One of the VolumeStatus values that indicates the state of the storage volume. */
  volumeStatus?: string;
  /**
   * A value that indicates whether a storage volume is attached to, detached from, or is in the
   * process of detaching from a gateway. For more information, see Moving your volumes to a
   * different gateway.
   */
  volumeAttachmentStatus?: string;
  /** The size of the volume in bytes. */
  volumeSizeInBytes?: number;
  /**
   * Represents the percentage complete if the volume is restoring or bootstrapping that represents
   * the percent of data transferred. This field does not appear in the response if the stored
   * volume is not restoring or bootstrapping.
   */
  volumeProgress?: number;
  /** The ID of the local disk that was specified in the CreateStorediSCSIVolume operation. */
  volumeDiskId?: string;
  /**
   * If the stored volume was created from a snapshot, this field contains the snapshot ID used,
   * e.g. snap-78e22663. Otherwise, this field is not included.
   */
  sourceSnapshotId?: string;
  /**
   * Indicates if when the stored volume was created, existing data on the underlying local disk was
   * preserved. Valid Values: true | false
   */
  preservedExistingData?: boolean;
  volumeiScsiAttributes?: VolumeiScsiAttributes;
  /**
   * The date the volume was created. Volumes created prior to March 28, 2017 don’t have this
   * timestamp.
   */
  createdDate?: Date;
  /**
   * The size of the data stored on the volume in bytes. This value is calculated based on the
   * number of blocks that are touched, instead of the actual amount of data written. This value can
   * be useful for sequential write patterns but less accurate for random write patterns.
   * VolumeUsedInBytes is different from the compressed size of the volume, which is the value that
   * is used to calculate your bill. This value is not available for volumes created prior to May
   * 13, 2015, until you store data on the volume.
   */
  volumeUsedInBytes?: number;
  kmsKey?: string;
  /**
   * The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix
   * for the target ARN. For example, specifying TargetName as myvolume results in the target ARN of
   * arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume.
   * The target name must be unique across all volumes on a gateway. If you don't specify a value,
   * Storage Gateway uses the value that was previously used for this volume as the new target name.
   */
  targetName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storediScsiVolumeSchema: Schema<StorediScsiVolume> = s.object<StorediScsiVolume>(
  {
    volumeArn: s.optional(s.string()),
    volumeId: s.optional(s.string()),
    volumeType: s.optional(s.string()),
    volumeStatus: s.optional(s.string()),
    volumeAttachmentStatus: s.optional(s.string()),
    volumeSizeInBytes: s.optional(s.int()),
    volumeProgress: s.optional(s.float64()),
    volumeDiskId: s.optional(s.string()),
    sourceSnapshotId: s.optional(s.string()),
    preservedExistingData: s.optional(s.boolean()),
    volumeiScsiAttributes: s.optional(s.lazy(() => volumeiScsiAttributesSchema)),
    createdDate: s.optional(s.dateTime()),
    volumeUsedInBytes: s.optional(s.int()),
    kmsKey: s.optional(s.string()),
    targetName: s.optional(s.string()),
    _keysMap: {
      volumeArn: "VolumeARN",
      volumeId: "VolumeId",
      volumeType: "VolumeType",
      volumeStatus: "VolumeStatus",
      volumeAttachmentStatus: "VolumeAttachmentStatus",
      volumeSizeInBytes: "VolumeSizeInBytes",
      volumeProgress: "VolumeProgress",
      volumeDiskId: "VolumeDiskId",
      sourceSnapshotId: "SourceSnapshotId",
      preservedExistingData: "PreservedExistingData",
      volumeiScsiAttributes: "VolumeiSCSIAttributes",
      createdDate: "CreatedDate",
      volumeUsedInBytes: "VolumeUsedInBytes",
      kmsKey: "KMSKey",
      targetName: "TargetName",
    },
  },
  { additionalProperties: s.json() },
);
