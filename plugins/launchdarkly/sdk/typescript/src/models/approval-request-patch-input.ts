import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApprovalRequestPatchInput = {
  /** Optional comment describing the update */
  comment?: string;
  instructions: Record<string, unknown>[];
};

export const approvalRequestPatchInputSchema: Schema<ApprovalRequestPatchInput> =
  s.object<ApprovalRequestPatchInput>({
    comment: s.optional(s.string()),
    instructions: s.array(s.record(s.string(), s.unknown())),
  });
