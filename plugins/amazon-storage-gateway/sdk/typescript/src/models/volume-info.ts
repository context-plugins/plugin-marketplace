import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type VolumeInfo = {
  /**
   * The Amazon Resource Name (ARN) for the storage volume. For example, the following is a valid
   * ARN: arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB
   * Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).
   */
  volumeArn?: string;
  /**
   * The unique identifier assigned to the volume. This ID becomes part of the volume Amazon
   * Resource Name (ARN), which you use as input for other operations. Valid Values: 50 to 500
   * lowercase letters, numbers, periods (.), and hyphens (-).
   */
  volumeId?: string;
  gatewayArn?: string;
  /**
   * The unique identifier assigned to your gateway during activation. This ID becomes part of the
   * gateway Amazon Resource Name (ARN), which you use as input for other operations. Valid Values:
   * 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).
   */
  gatewayId?: string;
  /** One of the VolumeType enumeration values describing the type of the volume. */
  volumeType?: string;
  /**
   * The size of the volume in bytes. Valid Values: 50 to 500 lowercase letters, numbers, periods
   * (.), and hyphens (-).
   */
  volumeSizeInBytes?: number;
  /** One of the VolumeStatus values that indicates the state of the storage volume. */
  volumeAttachmentStatus?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const volumeInfoSchema: Schema<VolumeInfo> = s.object<VolumeInfo>(
  {
    volumeArn: s.optional(s.string()),
    volumeId: s.optional(s.string()),
    gatewayArn: s.optional(s.string()),
    gatewayId: s.optional(s.string()),
    volumeType: s.optional(s.string()),
    volumeSizeInBytes: s.optional(s.int()),
    volumeAttachmentStatus: s.optional(s.string()),
    _keysMap: {
      volumeArn: "VolumeARN",
      volumeId: "VolumeId",
      gatewayArn: "GatewayARN",
      gatewayId: "GatewayId",
      volumeType: "VolumeType",
      volumeSizeInBytes: "VolumeSizeInBytes",
      volumeAttachmentStatus: "VolumeAttachmentStatus",
    },
  },
  { additionalProperties: s.json() },
);
