import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sseTypeSchema, type SseType } from "./sse-type.js";
import { statusSchema, type Status } from "./status.js";
import { tagSchema, type Tag } from "./tag.js";

export type StartSnapshotResponse = {
  /** The description of the snapshot. */
  description?: string;
  /** The ID of the snapshot. */
  snapshotId?: string;
  /** The Amazon Web Services account ID of the snapshot owner. */
  ownerId?: string;
  /** The status of the snapshot. */
  status?: Status;
  /** The timestamp when the snapshot was created. */
  startTime?: Date;
  /** The size of the volume, in GiB. */
  volumeSize?: number;
  /** The size of the blocks in the snapshot, in bytes. */
  blockSize?: number;
  /**
   * The tags applied to the snapshot. You can specify up to 50 tags per snapshot. For more
   * information, see Tagging your Amazon EC2 resources in the Amazon Elastic Compute Cloud User
   * Guide.
   */
  tags?: Tag[];
  /** The ID of the parent snapshot. */
  parentSnapshotId?: string;
  /**
   * The Amazon Resource Name (ARN) of the Key Management Service (KMS) key used to encrypt the
   * snapshot.
   */
  kmsKeyArn?: string;
  /** Reserved for future use. */
  sseType?: SseType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startSnapshotResponseSchema: Schema<StartSnapshotResponse> = s.object<StartSnapshotResponse>(
  {
    description: s.optional(s.string()),
    snapshotId: s.optional(s.string()),
    ownerId: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusSchema)),
    startTime: s.optional(s.dateTime()),
    volumeSize: s.optional(s.int()),
    blockSize: s.optional(s.int()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    parentSnapshotId: s.optional(s.string()),
    kmsKeyArn: s.optional(s.string()),
    sseType: s.optional(s.lazy(() => sseTypeSchema)),
    _keysMap: {
      description: "Description",
      snapshotId: "SnapshotId",
      ownerId: "OwnerId",
      status: "Status",
      startTime: "StartTime",
      volumeSize: "VolumeSize",
      blockSize: "BlockSize",
      tags: "Tags",
      parentSnapshotId: "ParentSnapshotId",
      kmsKeyArn: "KmsKeyArn",
      sseType: "SseType",
    },
  },
  { additionalProperties: s.json() },
);
