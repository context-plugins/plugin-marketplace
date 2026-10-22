import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kind18Schema, type Kind18 } from "./kind18.js";
import { targetTypeSchema, type TargetType } from "./target-type.js";

export type PatchSegmentExpiringTargetInstruction = {
  /** The type of change to make to the context's removal date from this segment */
  kind: Kind18;
  /** A unique key used to represent the context */
  contextKey: string;
  /** The kind of context */
  contextKind: string;
  /** The segment's target type */
  targetType: TargetType;
  /**
   * The time, in Unix milliseconds, when the context should be removed from this segment. Required
   * if <code>kind</code> is <code>addExpiringTarget</code> or <code>updateExpiringTarget</code>.
   */
  value?: number;
  /**
   * The version of the expiring target to update. Optional and only used if <code>kind</code> is
   * <code>updateExpiringTarget</code>. If included, update will fail if version doesn't match
   * current version of the expiring target.
   */
  version?: number;
};

export const patchSegmentExpiringTargetInstructionSchema: Schema<PatchSegmentExpiringTargetInstruction> =
  s.object<PatchSegmentExpiringTargetInstruction>({
    kind: kind18Schema,
    contextKey: s.string(),
    contextKind: s.string(),
    targetType: targetTypeSchema,
    value: s.optional(s.int()),
    version: s.optional(s.int()),
  });
