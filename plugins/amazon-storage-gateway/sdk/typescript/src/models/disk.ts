import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Disk = {
  /** The unique device ID or other distinguishing data that identifies a local disk. */
  diskId?: string;
  /** The path of a local disk in the gateway virtual machine (VM). */
  diskPath?: string;
  /** The device node of a local disk as assigned by the virtualization environment. */
  diskNode?: string;
  /** A value that represents the status of a local disk. */
  diskStatus?: string;
  /** The local disk size in bytes. */
  diskSizeInBytes?: number;
  diskAllocationType?: string;
  /**
   * The iSCSI qualified name (IQN) that is defined for a disk. This field is not included in the
   * response if the local disk is not defined as an iSCSI target. The format of this field is
   * targetIqn::LUNNumber::region-volumeId.
   */
  diskAllocationResource?: string;
  diskAttributeList?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const diskSchema: Schema<Disk> = s.object<Disk>(
  {
    diskId: s.optional(s.string()),
    diskPath: s.optional(s.string()),
    diskNode: s.optional(s.string()),
    diskStatus: s.optional(s.string()),
    diskSizeInBytes: s.optional(s.int()),
    diskAllocationType: s.optional(s.string()),
    diskAllocationResource: s.optional(s.string()),
    diskAttributeList: s.optional(s.array(s.string())),
    _keysMap: {
      diskId: "DiskId",
      diskPath: "DiskPath",
      diskNode: "DiskNode",
      diskStatus: "DiskStatus",
      diskSizeInBytes: "DiskSizeInBytes",
      diskAllocationType: "DiskAllocationType",
      diskAllocationResource: "DiskAllocationResource",
      diskAttributeList: "DiskAttributeList",
    },
  },
  { additionalProperties: s.json() },
);
