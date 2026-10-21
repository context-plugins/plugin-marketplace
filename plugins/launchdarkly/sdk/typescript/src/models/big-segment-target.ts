import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BigSegmentTarget = {
  /** The target key */
  userKey: string;
  /**
   * Indicates whether the target is included.<br />Included targets are always segment members,
   * regardless of segment rules.
   */
  included: boolean;
  /**
   * Indicates whether the target is excluded.<br />Segment rules bypass excluded targets, so they
   * will never be included based on rules. Excluded targets may still be included explicitly.
   */
  excluded: boolean;
};

export const bigSegmentTargetSchema: Schema<BigSegmentTarget> = s.object<BigSegmentTarget>({
  userKey: s.string(),
  included: s.boolean(),
  excluded: s.boolean(),
});
