import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attachedDiskConfigSchema, type AttachedDiskConfig } from "./attached-disk-config.js";

/** Optional. Disk option config settings. */
export type DiskConfig1 = {
  /** Optional. Size in GB of the boot disk (default is 500GB). */
  bootDiskSizeGb?: number;
  /**
   * Optional. Indicates how many IOPS to provision for the disk. This sets the number of I/O
   * operations per second that the disk can handle. This field is supported only if boot_disk_type
   * is hyperdisk-balanced.
   */
  bootDiskProvisionedIops?: string;
  /**
   * Optional. Type of the boot disk (default is pd-standard). Valid values: pd-balanced (Persistent
   * Disk Balanced Solid State Drive), pd-ssd (Persistent Disk Solid State Drive), or pd-standard
   * (Persistent Disk Hard Disk Drive). See Disk types
   * (https://cloud.google.com/compute/docs/disks#disk-types).
   */
  bootDiskType?: string;
  /**
   * Optional. Number of attached SSDs, from 0 to 8 (default is 0). If SSDs are not attached, the
   * boot disk is used to store runtime logs and HDFS
   * (https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are
   * attached, this runtime bulk data is spread across them, and the boot disk contains only basic
   * config and installed binaries.Note: Local SSD options may vary by machine type and number of
   * vCPUs selected.
   */
  numLocalSsds?: number;
  /**
   * Optional. Indicates how much throughput to provision for the disk. This sets the number of
   * throughput mb per second that the disk can handle. Values must be greater than or equal to 1.
   * This field is supported only if boot_disk_type is hyperdisk-balanced.
   */
  bootDiskProvisionedThroughput?: string;
  /** Optional. A list of attached disk configs for a group of VM instances. */
  attachedDiskConfigs?: AttachedDiskConfig[];
  /**
   * Optional. Interface type of local SSDs (default is scsi). Valid values: scsi (Small Computer
   * System Interface), nvme (Non-Volatile Memory Express). See local SSD performance
   * (https://cloud.google.com/compute/docs/disks/local-ssd#performance).
   */
  localSsdInterface?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const diskConfig1Schema: Schema<DiskConfig1> = s.object<DiskConfig1>(
  {
    bootDiskSizeGb: s.optional(s.int()),
    bootDiskProvisionedIops: s.optional(s.string()),
    bootDiskType: s.optional(s.string()),
    numLocalSsds: s.optional(s.int()),
    bootDiskProvisionedThroughput: s.optional(s.string()),
    attachedDiskConfigs: s.optional(s.array(s.lazy(() => attachedDiskConfigSchema))),
    localSsdInterface: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
