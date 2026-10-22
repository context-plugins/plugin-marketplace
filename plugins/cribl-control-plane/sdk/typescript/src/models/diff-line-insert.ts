import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Inserted line in a Git diff hunk. */
export type DiffLineInsert = {
  /** Line change type. Always <code>insert</code> for inserted lines. @default "insert" */
  type?: "insert";
  /** Line number in the new file. */
  newNumber: number;
  /** Full content of the line, including the diff prefix character. */
  content: string;
};

export const diffLineInsertSchema: Schema<DiffLineInsert> = s.object<DiffLineInsert>({
  type: s.defaulted(s.literal("insert"), "insert"),
  newNumber: s.int(),
  content: s.string(),
});
