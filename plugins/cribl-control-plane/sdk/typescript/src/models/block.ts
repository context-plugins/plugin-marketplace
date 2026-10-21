import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { diffLineSchema, type DiffLine } from "./unions/diff-line.js";

export type Block = {
  /** Unified diff hunk header. */
  header: string;
  /** Array of lines in this diff hunk. */
  lines: DiffLine[];
  /** Starting line number in the new file for this hunk. */
  newStartLine: number;
  /** Starting line number in the original file for this hunk. */
  oldStartLine: number;
  /** Starting line number in the original file for the second parent, present in combined diffs. */
  oldStartLine2?: number;
};

export const blockSchema: Schema<Block> = s.object<Block>({
  header: s.string(),
  lines: s.array(s.lazy(() => diffLineSchema)),
  newStartLine: s.int(),
  oldStartLine: s.int(),
  oldStartLine2: s.optional(s.int()),
});
