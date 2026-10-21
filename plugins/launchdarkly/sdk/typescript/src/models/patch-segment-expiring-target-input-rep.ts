import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  patchSegmentExpiringTargetInstructionSchema,
  type PatchSegmentExpiringTargetInstruction,
} from "./patch-segment-expiring-target-instruction.js";

export type PatchSegmentExpiringTargetInputRep = {
  /** Optional description of changes */
  comment?: string;
  /** Semantic patch instructions for the desired changes to the resource */
  instructions: PatchSegmentExpiringTargetInstruction[];
};

export const patchSegmentExpiringTargetInputRepSchema: Schema<PatchSegmentExpiringTargetInputRep> =
  s.object<PatchSegmentExpiringTargetInputRep>({
    comment: s.optional(s.string()),
    instructions: s.array(s.lazy(() => patchSegmentExpiringTargetInstructionSchema)),
  });
