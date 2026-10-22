import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { diffLineContextSchema, type DiffLineContext } from "../diff-line-context.js";
import { diffLineDeleteSchema, type DiffLineDelete } from "../diff-line-delete.js";
import { diffLineInsertSchema, type DiffLineInsert } from "../diff-line-insert.js";

export type GitDiffLines =
  | (DiffLineDelete & { type: "delete" })
  | (DiffLineInsert & { type: "insert" })
  | (DiffLineContext & { type: "context" });

export const gitDiffLinesSchema: Schema<GitDiffLines> = s.discriminatedUnion<GitDiffLines>("type", {
  delete: diffLineDeleteSchema,
  insert: diffLineInsertSchema,
  context: diffLineContextSchema,
});
