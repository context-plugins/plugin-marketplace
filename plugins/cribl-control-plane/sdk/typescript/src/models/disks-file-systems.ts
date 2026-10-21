import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Creates events for physical disks, partitions, and file systems */
export type DisksFileSystems = {
  /** Enabled */
  enable?: boolean;
};

export const disksFileSystemsSchema: Schema<DisksFileSystems> = s.object<DisksFileSystems>({
  enable: s.optional(s.boolean()),
});
