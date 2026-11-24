import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { diskTypeSchema, type DiskType } from "./disk-type.js";

/** Specifies the config of attached disk options for single VM instance. */
export type AttachedDiskConfig = {
  /**
   * Optional. Indicates how many IOPS to provision for the attached disk. This sets the number of
   * I/O operations per second that the disk can handle. See
   * https://cloud.google.com/compute/docs/disks/hyperdisks#hyperdisk-features
   */
  provisionedIops?: string;
  /** Optional. Disk size in GB. */
  diskSizeGb?: number;
  /**
   * Optional. Deprecated: Use type instead.
   *
   * @deprecated
   */
  diskType?: DiskType;
  /**
   * Optional. Indicates how much throughput to provision for the attached disk. This sets the
   * number of throughput mb per second that the disk can handle. See
   * https://cloud.google.com/compute/docs/disks/hyperdisks#hyperdisk-features
   */
  provisionedThroughput?: string;
  /**
   * Optional. Attached disk type. Currently only supports Hyperdisks. See
   * https://cloud.google.com/compute/docs/disks/hyperdisks. Note: Hyperdisk Balanced High
   * Availability is not supported.Allowed values are: hyperdisk-balanced hyperdisk-extreme
   * hyperdisk-ml hyperdisk-throughput
   */
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attachedDiskConfigSchema: Schema<AttachedDiskConfig> = s.object<AttachedDiskConfig>(
  {
    provisionedIops: s.optional(s.string()),
    diskSizeGb: s.optional(s.int()),
    diskType: s.optional(s.lazy(() => diskTypeSchema)),
    provisionedThroughput: s.optional(s.string()),
    type: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
