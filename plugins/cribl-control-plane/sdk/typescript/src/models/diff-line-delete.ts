import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Deleted line in a Git diff hunk. */
export type DiffLineDelete = {
  /** Line change type. Always <code>delete</code> for deleted lines. @default "delete" */
  type?: "delete";
  /** Line number in the original file. */
  oldNumber: number;
  /** Full content of the line, including the diff prefix character. */
  content: string;
};

export const diffLineDeleteSchema: Schema<DiffLineDelete> = s.object<DiffLineDelete>({
  type: s.defaulted(s.literal("delete"), "delete"),
  oldNumber: s.int(),
  content: s.string(),
});
