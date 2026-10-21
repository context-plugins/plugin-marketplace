import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Unchanged context line in a Git diff hunk. */
export type DiffLineContext = {
  /** Line change type. Always <code>context</code> for unchanged lines. @default "context" */
  type?: "context";
  /** Line number in the new file. */
  newNumber: number;
  /** Line number in the original file. */
  oldNumber: number;
  /** Full content of the line, including the diff prefix character. */
  content: string;
};

export const diffLineContextSchema: Schema<DiffLineContext> = s.object<DiffLineContext>({
  type: s.defaulted(s.literal("context"), "context"),
  newNumber: s.int(),
  oldNumber: s.int(),
  content: s.string(),
});
