import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { patchSegmentInstructionSchema, type PatchSegmentInstruction } from "./patch-segment-instruction.js";

export type PatchSegmentRequest = {
  /** Optional description of changes */
  comment?: string;
  /** Semantic patch instructions for the desired changes to the resource */
  instructions: PatchSegmentInstruction[];
};

export const patchSegmentRequestSchema: Schema<PatchSegmentRequest> = s.object<PatchSegmentRequest>({
  comment: s.optional(s.string()),
  instructions: s.array(s.lazy(() => patchSegmentInstructionSchema)),
});
