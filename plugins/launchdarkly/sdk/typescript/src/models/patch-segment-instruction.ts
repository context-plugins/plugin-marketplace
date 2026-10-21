import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kind19Schema, type Kind19 } from "./kind19.js";
import { targetTypeSchema, type TargetType } from "./target-type.js";

export type PatchSegmentInstruction = {
  /** The type of change to make to the user's removal date from this segment */
  kind: Kind19;
  /** A unique key used to represent the user */
  userKey: string;
  /** The segment's target type */
  targetType: TargetType;
  /**
   * The time, in Unix milliseconds, when the user should be removed from this segment. Required if
   * <code>kind</code> is <code>addExpireUserTargetDate</code> or
   * <code>updateExpireUserTargetDate</code>.
   */
  value?: number;
  /**
   * The version of the segment to update. Required if <code>kind</code> is
   * <code>updateExpireUserTargetDate</code>.
   */
  version?: number;
};

export const patchSegmentInstructionSchema: Schema<PatchSegmentInstruction> =
  s.object<PatchSegmentInstruction>({
    kind: kind19Schema,
    userKey: s.string(),
    targetType: targetTypeSchema,
    value: s.optional(s.int()),
    version: s.optional(s.int()),
  });
