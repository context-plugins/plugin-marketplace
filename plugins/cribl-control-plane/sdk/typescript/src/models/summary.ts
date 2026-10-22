import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Summary of line changes in the commit. */
export type Summary = {
  /** Total number of lines changed (insertions plus deletions). */
  changes: number;
  /** Number of lines deleted. */
  deletions: number;
  /** Number of lines inserted. */
  insertions: number;
};

export const summarySchema: Schema<Summary> = s.object<Summary>({
  changes: s.int(),
  deletions: s.int(),
  insertions: s.int(),
});
