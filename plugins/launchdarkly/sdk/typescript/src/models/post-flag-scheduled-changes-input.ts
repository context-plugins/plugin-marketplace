import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PostFlagScheduledChangesInput = {
  /** Optional comment describing the scheduled changes */
  comment?: string;
  executionDate: number;
  instructions: Record<string, unknown>[];
};

export const postFlagScheduledChangesInputSchema: Schema<PostFlagScheduledChangesInput> =
  s.object<PostFlagScheduledChangesInput>({
    comment: s.optional(s.string()),
    executionDate: s.int(),
    instructions: s.array(s.record(s.string(), s.unknown())),
  });
