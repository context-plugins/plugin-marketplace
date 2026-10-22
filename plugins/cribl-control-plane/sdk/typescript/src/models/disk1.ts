import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mode12Schema, type Mode12 } from "./mode12.js";

/** Select the level of details for disk metrics */
export type Disk1 = {
  /** Select the level of details for disk metrics */
  mode?: Mode12;
  /** Generate separate metrics for each volume */
  perVolume?: boolean;
  /** Generate full disk metrics */
  detail?: boolean;
  /**
   * Windows volumes to include/exclude. E.g.: C:, !E:, etc. Wildcards and ! (not) operators are
   * supported. All volumes are included if this list is empty.
   */
  volumes?: string[];
};

export const disk1Schema: Schema<Disk1> = s.object<Disk1>({
  mode: s.optional(s.lazy(() => mode12Schema)),
  perVolume: s.optional(s.boolean()),
  detail: s.optional(s.boolean()),
  volumes: s.optional(s.array(s.string())),
});
