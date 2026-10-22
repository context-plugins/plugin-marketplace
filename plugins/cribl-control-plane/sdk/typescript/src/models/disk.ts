import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mode6Schema, type Mode6 } from "./mode6.js";

/** Select the level of detail for disk metrics */
export type Disk = {
  /** Select the level of detail for disk metrics */
  mode?: Mode6;
  /** Generate full disk metrics */
  detail?: boolean;
  /** Generate filesystem inode metrics */
  inodes?: boolean;
  /**
   * Block devices to include/exclude. Examples: sda*, !loop*. Wildcards and ! (not) operators are
   * supported. All devices are included if this list is empty.
   */
  devices?: string[];
  /**
   * Filesystem mountpoints to include/exclude. Examples: /, /home, !/proc*, !/tmp. Wildcards and !
   * (not) operators are supported. All mountpoints are included if this list is empty.
   */
  mountpoints?: string[];
  /**
   * Filesystem types to include/exclude. Examples: ext4, !*tmpfs, !squashfs. Wildcards and ! (not)
   * operators are supported. All types are included if this list is empty.
   */
  fstypes?: string[];
  /** Generate separate metrics for each device */
  perDevice?: boolean;
};

export const diskSchema: Schema<Disk> = s.object<Disk>({
  mode: s.optional(s.lazy(() => mode6Schema)),
  detail: s.optional(s.boolean()),
  inodes: s.optional(s.boolean()),
  devices: s.optional(s.array(s.string())),
  mountpoints: s.optional(s.array(s.string())),
  fstypes: s.optional(s.array(s.string())),
  perDevice: s.optional(s.boolean()),
});
